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
import { SelectInput } from "../Inputs/SelectInput";
import { RadioInput } from "../Inputs/RadioInput";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const annualRevenueOptions = [
  {
    value: 1,
    optionLabel: "$0 - $4.9M",
  },
  {
    value: 2,
    optionLabel: "$5M - $499M",
  },
  {
    value: 3,
    optionLabel: "$500M+",
  },
];

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

type ViewerSubscriptionFormProps = {
  annualRevenue: string;
  paymentFrequency: string;
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

    const { paymentFrequency, annualRevenue } = formData;
    console.log(paymentFrequency);
    console.log(annualRevenue);

    const paymentFrequencyString = paymentFrequencyOptions.find(
      (option) => option.value === parseInt(paymentFrequency)
    ).optionLabel;
    const annualRevenueString = annualRevenueOptions.find(
      (rev) => rev.value === parseInt(annualRevenue)
    ).optionLabel;

    const response = await fetch("/api/viewerCheckoutSession", {
      method: "POST",
      body: JSON.stringify({
        paymentFrequencyString,
        annualRevenueString,
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
        Sports Wellness Platform Umbrella Organization - Register
      </h2>
      <div className="subscription-page-elements">
        <div className="platform-description-text">
          <h2 className="join-movement">Join the Movement!</h2>
          <p>With the Sports Wellness Platform Umbrella Membership, you get:</p>

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
            <p className="second-price">Find Your Fees</p>
            <p className="second-price">
              Use the drop-down list below to select your gross annual revenue -
              this will indicate your subscription fee. Subscription fees are
              shown and paid in USD.
            </p>
            <ul>
              <li>
                $0 - $4.9M: <b>$459/month or $5,000/year</b>
              </li>
              <li>
                $5M - $499M: <b>$917/month or $10,000/year</b>
              </li>
              <li>
                $500M+: <b>$1375/month or $15,000/year</b>
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
              <SelectInput
                label="Annual Revenue"
                inputName="annualRevenue"
                options={annualRevenueOptions}
                rules={{ required: "Please select a range of annual revenue." }}
              />
              <RadioInput
                label="Billing Frequency"
                inputName={"paymentFrequency"}
                options={paymentFrequencyOptions}
                rules={{ required: "Please select a payment type." }}
              />
              <div className="form-footer">
                <button type="submit" className="purchase-button">
                  Click Here to Purchase Umbrella Membership
                </button>
              </div>
            </form>
          </FormProvider>
          {/* <button
            onClick={() => {
              window.location.href = "/pages/pricingQuote";
            }}
            className="purchase-button"
          >
            Click Here to Get a Quote
          </button> */}
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
