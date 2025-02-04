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
import { RadioInput } from "../Inputs/RadioInput";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

type SubscriptionFormProps = {
  numParticipants: string;
  paymentFrequency: string;
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

    const stripe = await stripePromise;
    if (!stripe) {
      return;
    }

    const { numParticipants, paymentFrequency } = formData;

    const paymentFrequencyString = paymentFrequencyOptions.find(
      (option) => option.value === parseInt(paymentFrequency)
    ).optionLabel;

    const response = await fetch("/api/checkoutSession", {
      method: "POST",
      body: JSON.stringify({
        numParticipants: parseInt(numParticipants.replace(/,/g, "")),
        paymentFrequencyString,
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

  const paymentFrequencyOptions = [
    {
      value: 1,
      optionLabel: "Monthly",
    },
    {
      value: 2,
      optionLabel: "Annually",
    },
  ];

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
              1. First-year dashboard payment: <b>$3500/year</b>
            </p>
            <p className="and">AND</p>
            <p className="second-price">2. SWP evaluation responses payment</p>
            <ul>
              <li>
                50,000 or less participants: <br />
                
                <b>$1.25 per participant/year OR</b>
                <br />
                <b>$1.37 per participant/month</b>
              </li>
              <li>
                50,001 - 200,000 participants:
                <br />
                <b>$1.10 per participant/year OR</b>
                <br />
                <b>$1.21 per participant/month</b>
              </li>
              <li>
                200,001 or more participants: <br />
                <b>$1.00 per participant/year OR</b>
                <br />
                <b>$1.10 per participant/month</b>
              </li>
            </ul>

          </div>

          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(handleSubmitSubscription)}>
              <RadioInput
                label="Choose a Billing Frequency"
                inputName={"paymentFrequency"}
                options={paymentFrequencyOptions}
                rules={{ required: "Please select a payment type." }}
              />
              <TextInput
                inputName="numParticipants"
                label="Please enter an estimated number of participants in your organization."
                rules={{
                  required: "Please enter a number.",
                  validate: (value: string) => {
                    if (!(Number.isInteger(parseInt(value)) && parseInt(value) > 0)) return "Please enter a number."
                  }
                }}
              />
              <div className="form-footer">
                <button type="submit" className="purchase-button">
                  Click Here to Purchase Membership
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
