"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import Image from "next/image";
import horizontallogowhite from "../../../public/images/logo-horizontal-white.png";

import "./RegisterForm.scss";
import Footer from "../Footer/Footer";

export default function RegisterForm() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [stripeSubscriptionId, setStripeSubscriptionId] = useState<string>("");
  const [numberParticipants, setNumberParticipants] = useState<number>(0);

  const [error, setError] = useState<string>();
  const [passwordButtonText, setPasswordButtonText] =
    useState<string>("View Password");
  const [passwordInputType, setPasswordInputType] =
    useState<string>("password");

  const searchParams = useSearchParams();
  const stripeSessionId = searchParams.get("session_id") || "";
  console.log(stripeSessionId);

  useEffect(() => {
    const getStripePaymentInfo = async () => {
      const response = await fetch("../api/customerInformation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          stripeSessionId,
        }),
      });
      const {
        customerEmail,
        customerName,
        stripeSubscriptionId,
        numberParticipants,
      } = await response.json();
      setName(customerName);
      setEmail(customerEmail);
      setStripeSubscriptionId(stripeSubscriptionId);
      setNumberParticipants(numberParticipants);
    };
    getStripePaymentInfo();
  }, []);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      // const responseUserExists = await fetch("../api/userExists", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email }),
      // });

      // const { user } = await responseUserExists.json();

      // if (user) {
      //   setError("User already exists.");
      //   return;
      // }

      const response = await fetch("../api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
          stripeSubscriptionId,
          numberParticipants,
        }),
      });
      if (response.ok) {
        const form = e.target;
        //form.reset();
        router.push("/");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  const handleViewPasswordChange = () => {
    if (passwordButtonText.includes("View")) {
      setPasswordButtonText("Hide Password");
      setPasswordInputType("text");
    } else {
      setPasswordButtonText("View Password");
      setPasswordInputType("password");
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
      <div className="grid place-items-center h-screen mt-6">
        <div className="shadow-lg p-5 rounded-lg border-t-5 border-blue-400 register-form-container">
          <h1 className="text-xl font-bold my-4 thank-you-payment">
            Thank you for your payment!{" "}
          </h1>
          <p className="instructions-top">
            Please edit your profile name if needed, then
          </p>
          <p className="instructions-bottom">
            enter a password and account creation will be complete.
          </p>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <p className="input-label">Profile Name:</p>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              value={name}
              className="register-form-input"
            />
            <p className="input-label">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              value={email}
              className="register-form-input-disabled"
              disabled
            />
            <p className="input-label">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={passwordInputType}
              placeholder="Password"
              className="register-form-input"
            />
            <button
              className="password-view-button"
              onClick={handleViewPasswordChange}
            >
              {passwordButtonText}
            </button>
            <button className="create-account-button">
              Create Lasso Safe Account
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-sm mt-3 text-right" href={"/"}>
              Already have an account? <span className="underline">Login</span>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
