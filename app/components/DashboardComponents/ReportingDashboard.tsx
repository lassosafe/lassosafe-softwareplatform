"use client";

import "./Dashboard.scss";
import "./ReportingDashboard.scss";
import { useCallback, useEffect, useState } from "react";
import { SelectDropdown, SelectOption } from "../Dropdown/SelectDropdown";
import { useSession } from "next-auth/react";
import { DashboardHeader } from "./DashboardHeader";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";
import { useSearchParams } from "next/navigation";

import { ReportingDashboardContents } from "./ReportingDashboardContents";

export default function ReportingDashboard() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const isViewer = searchParams.get("isViewer") === "true" ? true : false;
  const [clients, setClients] = useState();
  const [selectedClientId, setSelectedClientId] = useState<string>("");

  const getClients = async () => {
    const email = session?.user?.email;
    if (email) {
      const result = await fetch("../../api/getClientsToView", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { clientsObj } = await result.json();
      console.log(clientsObj);
      setClients(
        clientsObj.map((client) => {
          return {
            id: client._id,
            name: client.name,
          };
        })
      );
      if (clientsObj[0]) setSelectedClientId(clientsObj[0]._id);
    }
  };

  const getUser = async () => {
    const userEmail = session?.user?.email;
    const res = await fetch("../api/userExists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });
    const { user } = await res.json();
    const userId = user;
    setSelectedClientId(userId);
  };

  useEffect(() => {
    console.log(" in use effect client and viewer");
    if (isViewer && !clients) {
      getClients();
    } else if (!isViewer) {
      getUser();
    }
  }, [clients, session]);

  const onChangeDisplayedClient = (selected: SelectOption<string>) => {
    const newSelectedClientId = selected.id;
    setSelectedClientId(newSelectedClientId);
  };

  return (
    <div className="reporting-dashboard-container">
      <DashboardHeader />
      <div className="center-components-reporting-dashboard">
        <NavigationMenu isViewer={isViewer} />
        <div className="reporting-dashboard-components">
          {isViewer && clients && (
            <>
              {selectedClientId !== "" ? (
                <div className="clients-dropdown">
                  <SelectDropdown
                    options={clients}
                    onSelectedChange={onChangeDisplayedClient}
                    title="Select Client to View"
                    initialValue={clients[0]}
                  />
                </div>
              ) : (
                <p>
                  You do not have anyone to view yet. Let your SWP members know
                  that they need to share their results with you through their
                  "Umbrella Sharing" page. To share, they need to enter your
                  email or account id, which can be found in Account Settings.
                </p>
              )}
            </>
          )}
          {selectedClientId !== "" && (
            <ReportingDashboardContents
              clientId={selectedClientId}
              isViewer={isViewer}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
