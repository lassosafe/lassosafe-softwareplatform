"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import "./AccountSettings.scss";
import { TextInput } from "../Inputs/SingleLineTextInput";
import { FormProvider, useForm } from "react-hook-form";
import { DashboardHeader } from "../DashboardComponents/DashboardHeader";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import {
  currentOrFutureYear,
  dateToMonthAndDay,
} from "@/app/constants/helperFunctions";
import { useSearchParams } from "next/navigation";
import { Loader } from "../Loader/Loader";

type EditNameFormProps = {
  name: string;
};

export default function AccountSettings() {
  const { data: session } = useSession();

  const [showCancelScreen, setShowCancelScreen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>(session?.user?.name || "");
  const [showBillingOrExpirationDate, setShowBillingOrExpirationDate] =
    useState<string>("billing");
  const [accountCreationDate, setAccountCreationDate] = useState<Date>(
    new Date()
  );
  const [numberParticipants, setNumberParticipants] = useState<number>(0);
  const [accountId, setAccountId] = useState<string>("");

  const searchParams = useSearchParams();
  const isViewer = searchParams.get("isViewer") === "true" ? true : false;

  const formMethods = useForm<EditNameFormProps>();
  const {
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = formMethods;

  useEffect(() => {
    setUserName(session?.user?.name);
    const getBillingInfo = async () => {
      const res = await fetch("../api/getBillingInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: session?.user?.email }),
      });
      const { correspondingUser } = await res.json();
      if (correspondingUser) {
        const { hasCanceled, accountCreationDate, numberParticipants, _id } =
          correspondingUser;
        setAccountCreationDate(accountCreationDate);
        setNumberParticipants(numberParticipants);
        setAccountId(_id);
        if (hasCanceled) {
          setShowBillingOrExpirationDate("expired");
        } else {
          setShowBillingOrExpirationDate("billing");
        }
      }
      setIsLoading(false);
    };
    getBillingInfo();
  }, [session]);

  const cancelSubscription = async () => {
    const res = await fetch("../api/getStripeSubscriptionId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: session?.user?.email }),
    });
    const { correspondingUser } = await res.json();

    const date = new Date(accountCreationDate);
    const month = date.getMonth();
    const day = date.getDate();
    const currentYear = currentOrFutureYear(accountCreationDate);
    const expirationDate = new Date(currentYear, month, day);

    const resCancel = await fetch("../api/cancelPayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stripeSubscriptionId: correspondingUser.stripeSubscriptionId,
        email: session?.user?.email,
        accountExpirationDate: expirationDate,
      }),
    });
    setShowBillingOrExpirationDate("expired");
    setShowCancelScreen(false);
  };

  const onEditName = async (formData: EditNameFormProps) => {
    const newName = formData.name;
    if (newName !== session?.user?.name && session?.user?.email) {
      const res = await fetch("../api/editUsername", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newName,
          email: session?.user?.email,
        }),
      });
      const res2 = await res.json();
    }
  };

  const reactivatePayment = async () => {
    const res = await fetch("../api/getStripeSubscriptionId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: session?.user?.email }),
    });
    const { correspondingUser } = await res.json();
    const resReactivate = await fetch("../api/reactivatePayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stripeSubscriptionId: correspondingUser.stripeSubscriptionId,
        email: session?.user?.email,
        //accountExpirationDate: expirationDate,
      }),
    });
    setShowBillingOrExpirationDate("billing");
    setShowCancelScreen(false);
  };

  return (
    <div>
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isViewer={isViewer} />
        <div className="place-items-center h-screen account-settings-container">
          <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2">
            <h2 className="account-settings">Account Settings</h2>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {showBillingOrExpirationDate === "billing" && (
                  <p className="account-update">
                    Your membership will be automatically billed on:{" "}
                    <b>
                      {dateToMonthAndDay(accountCreationDate) +
                        ", " +
                        currentOrFutureYear(accountCreationDate)}
                    </b>
                  </p>
                )}
                {showBillingOrExpirationDate === "expired" && (
                  <div>
                    <p className="account-update-cancel">
                      Your membership has been canceled and will expire on:{" "}
                      <b>
                        {dateToMonthAndDay(accountCreationDate) +
                          ", " +
                          currentOrFutureYear(accountCreationDate)}
                      </b>
                    </p>
                    <p>
                      You may reactivate the membership any time before the
                      expiration date.
                    </p>
                    <button
                      className="reactivate-button"
                      onClick={reactivatePayment}
                    >
                      Reactivate Membership
                    </button>
                  </div>
                )}
                <FormProvider {...formMethods}>
                  <form onSubmit={handleSubmit(onEditName)}>
                    <TextInput
                      className="user-email"
                      inputName="accountId"
                      label="Account ID (cannot edit):"
                      value={accountId}
                      disabled
                    />
                    <TextInput
                      className="user-email"
                      inputName="email"
                      label="Email (cannot edit):"
                      value={session?.user?.email}
                      disabled
                    />
                    <TextInput
                      inputName="name"
                      label="Name (editable):"
                      rules={{
                        required: "The name must be edited to save changes.",
                      }}
                      placeholder={userName}
                      //onChange={(e) => setUserName(e.target.value)}
                    />

                    <p></p>
                    <div className="form-footer">
                      <button type="submit" className="save-changes-button">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </FormProvider>
                {!isViewer && (
                  <FormProvider {...formMethods}>
                    <form onSubmit={handleSubmit(onEditName)}>
                      <TextInput
                        className="user-email"
                        inputName="numParticipants"
                        label="Number of Participants"
                        value={numberParticipants}
                        disabled
                      />
                      {/* <button>
                  Click to add more participants to your membership
                </button>
                <p>You will be increasin<p/>
                <div className="form-footer">
                  <button type="submit" className="save-changes-button">
                    Save Changes
                  </button>
                </div> */}
                    </form>
                  </FormProvider>
                )}

                {showBillingOrExpirationDate === "billing" && (
                  <>
                    <button
                      onClick={() => setShowCancelScreen(true)}
                      className="cancel-subscription-button text-white font-bold px-6 py-2 mt-3"
                    >
                      Cancel Subscription
                    </button>
                    {showCancelScreen && (
                      <div className="cancel-screen">
                        <p>
                          <b>
                            Are you sure you want to cancel this subscription?
                          </b>
                        </p>
                        <p className="cancel-description">
                          On{" "}
                          {dateToMonthAndDay(accountCreationDate) +
                            ", " +
                            currentOrFutureYear(accountCreationDate)}
                          , you will no longer have access to the Sports
                          Wellness Platform Dashboard or be able to create and
                          send evaluations to your participants.
                        </p>
                        <a className="yes-button" onClick={cancelSubscription}>
                          Yes, I'd like to cancel.
                        </a>
                        <a
                          className="no-button"
                          onClick={() => setShowCancelScreen(false)}
                        >
                          No, keep my subscription.
                        </a>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
