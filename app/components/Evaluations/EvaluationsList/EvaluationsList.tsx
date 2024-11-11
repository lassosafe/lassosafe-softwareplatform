"use client";

import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import Footer from "../../Footer/Footer";
import { DashboardHeader } from "../../DashboardComponents/DashboardHeader";

import "./EvaluationsList.scss";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Evaluation } from "../../DashboardComponents/Dashboard";
import { Loader } from "../../Loader/Loader";

export default function EvaluationsList() {
  const searchParams = useSearchParams();
  const isViewer = searchParams.get("isViewer") === "true" ? true : false;
  const { data: session } = useSession();

  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const buildEvaluationUrl = (evaluation: Evaluation) => {
    const domain = process.env.NEXT_PUBLIC_AUTH_URL;
    return `${domain}/pages/evalIntro?evalId=${
      evaluation._id
    }&cids=${evaluation.categoryIds.toString()}`;
  };

  const toDateString = (expirationDate: Date) => {
    const expDate = new Date(expirationDate);
    return expDate.toLocaleDateString();
  };

  useEffect(() => {
    const getEvaluations = async (email: string) => {
      const res = await fetch("../api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await res.json();
      const userId = user;
      const resEvals = await fetch("../api/getEvaluations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      const { evaluations } = await resEvals.json();
      if (evaluations) {
        setEvaluations(evaluations);
      }
      setIsLoading(false);
    };
    if (session?.user) {
      getEvaluations(session?.user?.email);
    }
  }, [session]);

  return (
    <div className="my-evaluations-list-page">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isViewer={isViewer} />
        <div className="evaluations-list-container">
          <h2 className="evaluations-list-title">My Evaluations List</h2>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {evaluations.length > 0 ? (
                <table className="evaluations-table">
                  <thead className="evaluations-table-header">
                    <th>Evaluation Name</th>
                    <th>Evaluation Expiration Date</th>
                    <th>Evaluation URL</th>
                  </thead>
                  <tbody>
                    {evaluations.map((evaluation) => {
                      return (
                        <tr>
                          <td>{evaluation.name}</td>
                          <td>{toDateString(evaluation.expirationDate)}</td>
                          <td>{buildEvaluationUrl(evaluation)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <p>
                  You do not have any evaluations yet. Head to New Evaluations
                  to create your first evaluation.
                </p>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
