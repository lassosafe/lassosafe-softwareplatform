"use client";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../Inputs/SingleLineTextInput";
import Footer from "../Footer/Footer";
import { useSession } from "next-auth/react";

import "./ViewerSharing.scss";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { DashboardHeader } from "../DashboardComponents/DashboardHeader";
import { useSearchParams } from "next/navigation";
import { Loader } from "../Loader/Loader";

type ViewerSharingFormProps = {
  viewerInfo: string;
};

type Viewer = {
  _id: string;
  name: string;
  email: string;
};

type ViewerItemProps = {
  name: string;
  email: string;
  id: string;
  onRemoveViewer: (id: string) => void;
};

function ViewerItem({ name, email, id, onRemoveViewer }: ViewerItemProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button
          className="remove-button"
          onClick={() => {
            onRemoveViewer(id);
          }}
        >
          Remove Umbrella Member
        </button>
      </td>
    </tr>
  );
}

export default function ViewerSharing() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const isViewer = searchParams.get("isViewer") === "true" ? true : false;

  const [showInviteViewerList, setShowInviteViewerList] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [viewers, setViewers] = useState<Viewer[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getViewers = async () => {
    const email = session?.user?.email;
    if (email) {
      const result = await fetch("../../api/getViewers ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { viewersObj } = await result.json();
      console.log(viewersObj);
      setViewers(viewersObj);
    }
  };

  useEffect(() => {
    if (!viewers) {
      getViewers();
      setIsLoading(false);
    }
  }, [viewers, session, showInviteViewerList]);

  const formMethods = useForm<ViewerSharingFormProps>();
  const {
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = formMethods;

  const handleSubmitAddViewer = async (formData: ViewerSharingFormProps) => {
    const { viewerInfo } = formData;
    const result = await fetch("../../api/getViewerExists ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ viewerInfo }),
    });
    const viewerExists = await result.json();
    if (!viewerExists.user) {
      setErrorMessage(
        "This viewer does not exist in the Sports Wellness Platform.  Check the information you entered or contact them  if they need to register for an account."
      );
    } else if (
      viewers.find((viewer) => viewer.email === viewerExists.user.email)
    ) {
      setErrorMessage("Your list already includes this viewer.");
    } else {
      const result = await fetch("../../api/addViewer ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          viewerId: viewerExists.user._id,
          clientEmail: session?.user?.email,
        }),
      });
      const res = await result.json();
      if (res) {
        setShowInviteViewerList(false);
        await getViewers();
      }
    }
  };

  const onRemoveViewer = async (id: string) => {
    const clientEmail = session?.user?.email;
    const viewerId = id;
    if (clientEmail && viewerId) {
      const result = await fetch("../../api/removeViewer ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientEmail, viewerId }),
      });
      const res = await result.json();
      if (res.result.acknowledged) {
        setShowInviteViewerList(false);
        await getViewers();
      }
    }
  };

  return (
    <div>
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isViewer={isViewer} />
        <div className="viewer-sharing-container">
          <h2 className="viewer-sharing-title">Umbrella Member Sharing List</h2>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="viewer-sharing-card ">
              {viewers &&
                (viewers.length > 0 ? (
                  <>
                    <p>
                      Below is the list of those who have viewing access to your
                      results. Click below to add more umbrella organizations.
                      An Umbrella member is an organization who oversees sports
                      organizations, such as insurers, brokers, investors,
                      private equity, governing bodies, school districts, etc.
                    </p>
                    <div>
                      <table className="viewers-table">
                        <thead className="viewers-table-header">
                          <th>Umbrella Name</th>
                          <th>Umbrella Email</th>
                          <th>Actions</th>
                        </thead>
                        <tbody>
                          {viewers.map((viewer: Viewer) => {
                            return (
                              <ViewerItem
                                key={viewer._id}
                                id={viewer._id}
                                name={viewer.name}
                                email={viewer.email}
                                onRemoveViewer={onRemoveViewer}
                              />
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  <div>
                    You are not sharing your results with any Sports Wellness
                    Platform Umbrella members. If you'd like to share, click the
                    button below. An Umbrella member is an organization who
                    oversees sports organizations, such as insurers, brokers,
                    investors, private equity, governing bodies, school
                    districts, etc.
                  </div>
                ))}
              <div></div>
              <button
                className="purchase-button"
                onClick={() => {
                  setShowInviteViewerList(true);
                }}
              >
                Add Umbrella Member
              </button>
              {showInviteViewerList && (
                <div>
                  <FormProvider {...formMethods}>
                    <form onSubmit={handleSubmit(handleSubmitAddViewer)}>
                      <TextInput
                        inputName="viewerInfo"
                        label="Please enter the email or account ID of the viewer."
                        rules={{
                          required: "Please enter a value.",
                        }}
                      />
                      <div className="error-message">{errorMessage}</div>
                      <div className="form-footer">
                        <button type="submit" className="purchase-button">
                          Invite an Umbrella Member
                        </button>
                      </div>
                    </form>
                  </FormProvider>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
