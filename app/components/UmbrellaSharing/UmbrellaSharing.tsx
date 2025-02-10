"use client";
/**
 * Component for an organization to share their data with
 * their umbrella organization and see/edit who they are sharing with
 */
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../Inputs/SingleLineTextInput";
import Footer from "../Footer/Footer";
import { useSession } from "next-auth/react";

import "./UmbrellaSharing.scss";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { DashboardHeader } from "../DashboardComponents/DashboardHeader";
import { useSearchParams } from "next/navigation";
import { Loader } from "../Loader/Loader";

type UmbrellaSharingFormProps = {
  umbrellaInfo: string;
};

type Umbrella = {
  _id: string;
  name: string;
  email: string;
};

type UmbrellaItemProps = {
  name: string;
  email: string;
  id: string;
  onRemoveUmbrella: (id: string) => void;
};

function UmbrellaItem({ name, email, id, onRemoveUmbrella }: UmbrellaItemProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button
          className="remove-button"
          onClick={() => {
            onRemoveUmbrella(id);
          }}
        >
          Remove Umbrella Member
        </button>
      </td>
    </tr>
  );
}

export default function UmbrellaSharing() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const isUmbrella = searchParams.get("isUmbrella") === "true" ? true : false;

  const [showInviteUmbrellaList, setShowInviteUmbrellaList] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [umbrellas, setUmbrellas] = useState<Umbrella[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getUmbrellas = async () => {
    const email = session?.user?.email;
    if (email) {
      const result = await fetch("../../api/getUmbrellas ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { umbrellasObj } = await result.json();
      console.log(umbrellasObj);
      setUmbrellas(umbrellasObj);
    }
  };

  useEffect(() => {
    if (!umbrellas) {
      getUmbrellas();
      setIsLoading(false);
    }
  }, [umbrellas, session, showInviteUmbrellaList]);

  const formMethods = useForm<UmbrellaSharingFormProps>();
  const {
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = formMethods;

  const handleSubmitAddUmbrella = async (formData: UmbrellaSharingFormProps) => {
    const { umbrellaInfo } = formData;
    const result = await fetch("../../api/getUmbrellaExists ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ umbrellaInfo }),
    });
    const umbrellaExists = await result.json();
    if (!umbrellaExists.user) {
      setErrorMessage(
        "This umbrella organization does not exist in the Sports Wellness Platform.  Check the information you entered or contact them  if they need to register for an account."
      );
    } else if (
      umbrellas.find((umbrella) => umbrella.email === umbrellaExists.user.email)
    ) {
      setErrorMessage("Your list already includes this umbrella organization.");
    } else {
      const result = await fetch("../../api/addUmbrella ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          umbrellaId: umbrellaExists.user._id,
          clientEmail: session?.user?.email,
        }),
      });
      const res = await result.json();
      if (res) {
        setShowInviteUmbrellaList(false);
        await getUmbrellas();
      }
    }
  };

  const onRemoveUmbrella = async (id: string) => {
    const clientEmail = session?.user?.email;
    const umbrellaId = id;
    if (clientEmail && umbrellaId) {
      const result = await fetch("../../api/removeUmbrella", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientEmail, umbrellaId }),
      });
      const res = await result.json();
      if (res.result.acknowledged) {
        setShowInviteUmbrellaList(false);
        await getUmbrellas();
      }
    }
  };

  return (
    <div>
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isUmbrella={isUmbrella} />
        <div className="umbrella-sharing-container">
          <h2 className="umbrella-sharing-title">Umbrella Member Sharing List</h2>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="umbrella-sharing-card ">
              {umbrellas &&
                (umbrellas.length > 0 ? (
                  <>
                    <p>
                      Below is the list of those who have viewing access to your
                      results. Click below to add more umbrella organizations.
                      An Umbrella member is an organization who oversees sports
                      organizations, such as insurers, brokers, investors,
                      private equity, governing bodies, school districts, etc.
                    </p>
                    <div>
                      <table className="umbrellas-table">
                        <thead className="umbrellas-table-header">
                          <th>Umbrella Name</th>
                          <th>Umbrella Email</th>
                          <th>Actions</th>
                        </thead>
                        <tbody>
                          {umbrellas.map((umbrella: Umbrella) => {
                            return (
                              <UmbrellaItem
                                key={umbrella._id}
                                id={umbrella._id}
                                name={umbrella.name}
                                email={umbrella.email}
                                onRemoveUmbrella={onRemoveUmbrella}
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
                  setShowInviteUmbrellaList(true);
                }}
              >
                Add Umbrella Member
              </button>
              {showInviteUmbrellaList && (
                <div>
                  <FormProvider {...formMethods}>
                    <form onSubmit={handleSubmit(handleSubmitAddUmbrella)}>
                      <TextInput
                        inputName="umbrellaInfo"
                        label="Please enter the email or account ID of the umbrella organization."
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
