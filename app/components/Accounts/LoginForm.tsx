"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import horizontallogo from "../../../public/images/logo-horizontal.png";
import Image from "next/image";

import "./LoginForm.scss";

export default function LoginForm() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>();

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (response?.error) {
        setError("invalid credentials");
        return;
      }
      const userInfo = await fetch("../api/getBillingInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { correspondingUser } = await userInfo.json();
      const today = new Date(Date.now());
      const accountExpirationDateFormatted = new Date(
        correspondingUser.accountExpirationDate
      );
      if (
        correspondingUser.hasCanceled === true &&
        accountExpirationDateFormatted < today
      ) {
        setError("This account has an expired membership.");
        return;
      }

      correspondingUser.isViewer
        ? router.replace("/pages/viewerDashboard")
        : router.replace("/pages/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="image-background">
        <div className="horizontal-logo-image-container">
          <Image
            className="horizontal-logo-image"
            src={horizontallogo}
            alt="horizontallogo"
            objectFit="contain"
          ></Image>
        </div>
        <div>
          <p className="athlete-platform-text">
            Athlete Safety Reporting Platform
          </p>
          <p className="athlete-protect-text">
            To protect athletes and create a more prosperous sporting community.
          </p>
        </div>
      </div>
      <div className="dashboard-container">
        <h1 className="dashboard-login-title">Dashboard Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="login-input"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className=" text-white font-bold cursor-pointer px-6 py-2 login-button">
            Log In
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <p className="no-account">
            <b>Don't have an account?</b> Click{" "}
            <a href="/pages/subscription" className="subscription-link">
              here
            </a>{" "}
            to purchase a subscription.
          </p>
          <p className="no-account">
            <b>Are you a viewer and don't have an account?</b> Click{" "}
            <a href="/pages/viewerSubscription" className="subscription-link">
              here
            </a>{" "}
            to purchase a viewer subscription.
          </p>
          <p>
            <b>Want to learn more?</b> Click{" "}
            <a
              href="https://lassosafe.com"
              target="_blank"
              className="subscription-link"
            >
              here
            </a>{" "}
            to learn more about Lasso Safe.
          </p>
          <p>
            <b>Forgot Password?</b> Click{" "}
            <a
              onClick={() =>
                (window.location.href = "/pages/requestResetPassword")
              }
              target="_blank"
              className="subscription-link"
              style={{ cursor: "pointer" }}
            >
              here
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
