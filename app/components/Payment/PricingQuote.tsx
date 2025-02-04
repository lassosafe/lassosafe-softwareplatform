"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import exampleswpdashboard from "../../../public/images/example-swp-dashboard.png";
import horizontallogowhite from "../../../public/images/logo-horizontal-white.png";

import "./Subscription.scss";
import "./PricingQuote.scss";
import { TextInput } from "../Inputs/SingleLineTextInput";
import Footer from "../Footer/Footer";
import { RadioInput } from "../Inputs/RadioInput";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

type PricingQuoteProps = {
  numParticipants: string;
  paymentFrequency: string;
};

const calculatePricePerParticipant = (
  numParticipants: string,
  paymentFrequencyString: string
) => {
  const numParticipantsInt = parseInt(numParticipants);
  if (numParticipantsInt <= 50000) {
    if (paymentFrequencyString === "Monthly") {
      return "1.37";
    }
    return "1.25";
  } else if (numParticipantsInt <= 200000) {
    if (paymentFrequencyString === "Monthly") {
      return "1.21";
    }
    return "1.10";
  } else if (paymentFrequencyString === "Monthly") {
    return "1.10";
  } else return "1.00";
};

export default function PricingQuote() {
  const [showQuote, setShowQuote] = useState<boolean>(false);
  const [pricePerParticipant, setPricePerParticipant] = useState<string>("");
  const [numParticipants, setNumParticipants] = useState<string>("");

  const calculateParticipantFee = () => {
    return parseFloat(numParticipants) * parseFloat(pricePerParticipant);
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

  const formMethods = useForm<PricingQuoteProps>();
  const {
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = formMethods;

  const handleSubmitPricingQuote = async (formData: PricingQuoteProps) => {
    const { numParticipants, paymentFrequency } = formData;
    const numPartcipantsFormatted = numParticipants.replace(/,/g, "");
    const paymentFrequencyString = paymentFrequencyOptions.find(
      (option) => option.value === parseInt(paymentFrequency)
    ).optionLabel;
    setPricePerParticipant(
      calculatePricePerParticipant(
        numPartcipantsFormatted,
        paymentFrequencyString
      )
    );
    setNumParticipants(numPartcipantsFormatted);
    setShowQuote(true);
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
        <div className="subscription-plan-selection">
          <div className="pricing">
            <p className="pricing-title">Pricing</p>
            <p className="first-price">
              1. First-year dashboard payment: <b>$3500 per year</b>
            </p>
            <p className="and">AND</p>
            <p className="second-price">2. SWP evaluation responses payment</p>
            <ul>
              <li>
                50,000 or less participants: <br />
                <b>$1.25 per participant per year OR</b>
                <br />
                <b>$1.37 per participant per month</b>
              </li>
              <li>
                50,001 - 200,000:
                <br />
                <b>$1.10 per participant per year OR</b>
                <br />
                <b>$1.21 per participant per month</b>
              </li>
              <li>
                200,001 or more participants: <br />
                <b>$1.00 per participant per year OR</b>
                <br />
                <b>$1.10 per participant per month</b>
              </li>
            </ul>
          </div>

          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(handleSubmitPricingQuote)}>
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
                  Get Quote
                </button>
              </div>
            </form>
          </FormProvider>
          <button
            onClick={() => {
              window.location.href = "/pages/subscription";
            }}
            className="purchase-button"
          >
            Purchase Membership
          </button>
        </div>
        {showQuote && (
          <div className="pricing-quote">
            <h2 className="quote-title">
              <b>Your Sports Wellness Plaform Quote:</b>
            </h2>
            <p className="pricing-item">First-year platform fee: $3500</p>
            <p className="plus">+</p>
            <p className="pricing-item">
              Participant Fee = {parseInt(numParticipants).toLocaleString()}{" "}
              participants * ${pricePerParticipant} = $
              {calculateParticipantFee().toFixed(2)}
            </p>
            <p></p>
            <p className="pricing-item total">
              <b>Total cost for first year:</b> $
              {(3500 + calculateParticipantFee()).toFixed(2)}
            </p>
            <p className="pricing-item">
              <b>Total cost per year after first year:</b> $
              {(1500 + calculateParticipantFee()).toFixed(2)}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
