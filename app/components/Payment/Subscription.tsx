"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import exampleswpdashboard from "../../../public/images/example-swp-dashboard.png";
import horizontallogowhite from "../../../public/images/logo-horizontal-white.png";

import "./Subscription.scss";
import { SelectInput } from "../Inputs/SelectInput";
import { TextInput } from "../Inputs/SingleLineTextInput";

const subscriptionPlanOptions = [
  {
    value: "1",
    optionLabel: "small",
    priceId: "price_1Q6IYDDtt4SMJazLkoBQrEbk",
  },
  {
    value: "2",
    optionLabel: "medium",
    priceId: "price_1Q6IYDDtt4SMJazLkoBQrEbk",
  },
  {
    value: "3",
    optionLabel: "large",
    priceId: "price_1Q6IYDDtt4SMJazLkoBQrEbk",
  },
];

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

type SubscriptionFormProps = {
  numParticipants: string;
};

export default function SubscriptionForm() {
  const [priceId, setPriceId] = useState("");

  const formMethods = useForm<SubscriptionFormProps>();
  const {
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = formMethods;

  const handleSubmitSubscription = async (formData: SubscriptionFormProps) => {
    const stripePromise = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
    );

    // const subscriptionPlan = formData.subscriptionPlan;
    // const subscriptionPlanId = subscriptionPlanOptions.find(
    //   (s) => s.value === subscriptionPlan
    // )?.priceId;

    const stripe = await stripePromise;
    if (!stripe) {
      return;
    }

    const { numParticipants } = formData;

    const response = await fetch("/api/checkoutSession", {
      method: "POST",
      body: JSON.stringify({
        priceId: "price_1Q6IYDDtt4SMJazLkoBQrEbk",
        numParticipants: parseInt(numParticipants),
      }),
    });
    const data = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    });

    if (result.error) {
      console.error(result.error.message);
      alert(result.error.message);
      //setLoading(false);
    }
    //event.preventDefault();
    // const f = formData;
    // const stripe = await stripePromise;
    // const elements = useElements();
    // if (!stripe && !elements) {
    //   return;
    // }

    // const { error } = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
    //     return_url: "http://localhost:3000",
    //   },
    // });

    // const cardElement = elements.getElement(CardElement);

    // await stripe
    //   .createPaymentMethod({
    //     type: "card",
    //     card: cardElement,
    //   })
    //   .then(async (result) => {
    //     if (result.error) {
    //       console.error("Error creating payment method:", result.error);
    //       return;
    //     } else {
    //       const response = await fetch("/api/create-subscription", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //           priceId,
    //           paymentMethodId: result.paymentMethod.id,
    //         }),
    //       });
    //     }
    //   });

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });

    // if (error) {
    //   console.error("Error creating payment method:", error);
    //   return;
    // } else {
    //   const response = await fetch("/api/create-subscription", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ priceId, paymentMethodId: paymentMethod.id }),
    //   });

    //   // Handle response
    // }
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
      <h2 className="swp-register">Sports Wellness Platform - Register</h2>
      <div className="subscription-page-elements">
        <div className="platform-description-text">
          <h2 className="join-movement">Join the Movement!</h2>
          <p>With the Sports Wellness Platform Membership, you get:</p>
          <p className="list-title">Experience Recognition</p>
          <ul>
            <li>
              An inviting questionnaire uniquely designed by experts to
              understand athletes and sports experience trends.
            </li>
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
            <li>
              Peer reviewed by 350 athletes, legal council in sport, child.
            </li>
          </ul>
          <p className="list-title">Intuitive Overview Dashboard</p>
          <ul>
            <li>
              Recognition tool informs comparative data and trend analysis.
            </li>
            <li>Simple easy-use design.</li>
            <li>
              Clear overview reporting supported by strategic suggestions and
              learning modules.
            </li>
          </ul>
          <p className="list-title">Strategic Suggestions</p>
          <ul>
            <li>
              Guided by the Experience Recognition, strategic suggestions and
              learning modules respond in real-time.
            </li>
          </ul>
        </div>
        <div className="subscription-plan-selection">
          <div className="pricing">
            <p className="pricing-title">Pricing</p>
            <p className="first-price">
              1. First-year dashboard payment: <b>$3500</b>
            </p>
            <p className="and">AND</p>
            <p className="second-price">2. SWP evaluation responses payment</p>
            <ul>
              <li>
                50,000 or less participants:{" "}
                <b>$1.25 per participant per year</b>
              </li>
              <li>
                50,001 - 200,000: <b>$1.10 per participant per year</b>
              </li>
              <li>
                200,001 or more participants:{" "}
                <b>$1.00 per participant per year</b>
              </li>
            </ul>
            <p className="payment-instructions">
              Upon registering, you will pay for the first-year dashboard
              payment, and the response payments will be automatically billed
              once sports wellness evaluations are sent and responses are
              received.
            </p>
          </div>
          {/* <button
            type="submit"
            className="purchase-button"
            onSubmit={handleSubmitSubscription()}
          > */}
          {/* Click Here to Purchase Membership
          </button> */}

          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(handleSubmitSubscription)}>
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
                  Click Here to Purchase Membership
                </button>
              </div>
            </form>
          </FormProvider>
          <p>Example Dashboard:</p>
          <Image
            src={exampleswpdashboard}
            alt="exampledashboard"
            objectFit="contain"
            className="example-swp-dashboard"
          ></Image>
        </div>
      </div>
    </div>
  );
}
