"use client";
import { useState } from "react";
import Footer from "../Footer/Footer";
import horizontallogowhite from "../../../public/images/logo-horizontal-white.png";
import Image from "next/image";

import "./RequestResetPassword.scss";

const RequestResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("../../api/requestResetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      alert("Check your email for a reset link!");
    } catch (error) {
      console.error(error);
      alert("Error sending reset email");
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
      <div className="reset-password-email-form">
        <h2 className="enter-email-text">
          Enter your email and if you have an account with LassoSafe, you will
          receive an email to reset your password.
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <br />
          <button type="submit" className="request-reset-button">
            Request Password Reset
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RequestResetPassword;
