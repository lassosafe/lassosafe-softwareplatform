"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import exampleswpdashboard from "../../../public/images/example-swp-dashboard.png";
import horizontallogowhite from "../../../public/images/logo-horizontal-white.png";

import "./Subscription.scss";
import { TextInput } from "../Inputs/SingleLineTextInput";
import Footer from "../Footer/Footer";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

type ViewerSubscriptionFormProps = {
  numParticipants: string;
};

export default function ViewerSubscriptionForm() {
  const [priceId, setPriceId] = useState("");

  const formMethods = useForm<ViewerSubscriptionFormProps>();
  const {
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = formMethods;

  const handleSubmitViewerSubscription = async (
    formData: ViewerSubscriptionFormProps
  ) => {
    const stripePromise = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
    );

    const stripe = await stripePromise;
    if (!stripe) {
      return;
    }

    const { numParticipants } = formData;

    const response = await fetch("/api/viewerCheckoutSession", {
      method: "POST",
      body: JSON.stringify({
        numParticipants: parseInt(numParticipants.replace(/,/g, "")),
      }),
    });
    const data = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    });

    if (result.error) {
      console.error(result.error.message);
      alert(result.error.message);
    }
  };

  return (
    <div>
      <header className="evaluation-header">
        <Image
          src={horizontallogowhite}
          alt="horizontallogo"
          objectFit="contain"
          className="header-logo"
        ></Image>
      </header>
      <h2 className="swp-register">
        Sports Wellness Platform Viewer - Register
      </h2>
      <div className="subscription-page-elements">
        <div className="platform-description-text">
          <h2 className="join-movement">Join the Movement!</h2>
          <p>With the Sports Wellness Platform Viewer Membership, you get:</p>

          <p className="list-title">Intuitive Overview Dashboard</p>
          <ul>
            <li>
              View your all of your clients results who are members of the
              Sports Wellness Plaform. You can view their total wellness score,
              as well as a breakdown of their scores.
            </li>
            <li>
              Recognition tool informs comparative data and trend analysis.
            </li>
            <li>Simple easy-use design.</li>
            <li>
              Clear overview reporting supported by strategic suggestions and
              learning modules.
            </li>
          </ul>
          <p className="list-title">Results</p>
          <ul>
            <li>
              Verified by experts.{" "}
              <a
                href="https://lassosafe.com/wp-content/uploads/2023/11/AWE-Expert-Validation-Overview_V4.pdf"
                target="_blank"
                className="read-more"
              >
                Read more.
              </a>
            </li>
            <li>Peer reviewed by 350 athletes, and legal council in sport.</li>
            <li>
              Recognition tool informs comparative data and trend analysis.
            </li>
          </ul>
          {/* <p className="list-title">Strategic Suggestions</p>
          <ul>
            <li>
              Guided by the Experience Recognition, strategic suggestions and
              learning modules respond in real-time.
            </li>
          </ul> */}
        </div>
        <div className="subscription-plan-selection">
          <div className="pricing">
            <p className="pricing-title">Pricing</p>
            <p className="second-price">2. SWP evaluation responses payment</p>
            <ul>
              <li>
                50,000 or less participants:{" "}
                <b>$1500 or $0.20 per person per year</b>
              </li>
              <li>
                50,001 or more participants:{" "}
                <b>$0.10 per participant per year</b>
              </li>
            </ul>
            <p className="payment-instructions">
              Upon registering, you will pay for the first-year dashboard
              payment, and the response payments will be automatically billed
              once sports wellness evaluations are sent and responses are
              received.
            </p>
          </div>

          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(handleSubmitViewerSubscription)}>
              <TextInput
                inputName="numParticipants"
                label="Please enter an estimated number of participants in your organization."
                rules={{
                  required: "Please enter a number.",
                  validate: (value: string) =>
                    Number.isInteger(parseInt(value)) && parseInt(value) > 0,
                }}
              />
              <div className="form-footer">
                <button type="submit" className="purchase-button">
                  Click Here to Purchase Viewer Membership
                </button>
              </div>
            </form>
          </FormProvider>
          <button
            onClick={() => {
              window.location.href = "/pages/pricingQuote";
            }}
            className="purchase-button"
          >
            Click Here to Get a Quote
          </button>
          <p>Example Dashboard:</p>
          <Image
            src={exampleswpdashboard}
            alt="exampledashboard"
            objectFit="contain"
            className="example-swp-dashboard"
          ></Image>
        </div>
      </div>
      <Footer />
    </div>
  );
}
