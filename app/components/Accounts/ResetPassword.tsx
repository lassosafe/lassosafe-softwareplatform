"use client";
/**
 * Component directed to user when they open their password reset email
 */

import { useState } from "react";
import Footer from "../Footer/Footer";
import Image from "next/image";
import horizontallogowhite from "../../../public/images/logo-horizontal-white.png";

import "./ResetPassword.scss";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("../api/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          token,
          newPassword,
        }),
      });
      alert("Password updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Error updating password");
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
      <form onSubmit={handleSubmit} className="reset-password-form">
        <p>
          Enter the token from your reset password email, choose a new password,
          then click "Reset Password".
        </p>
        <input
          className="reset-password-input"
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Reset password token"
          required
        />
        <br />
        <input
          className="reset-password-input"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New password"
          required
        />
        <br />
        <button className="reset-password-button" type="submit">
          Reset Password
        </button>
      </form>
      <button
        onClick={() => (window.location.href = "/")}
        className="back-to-login-button"
      >
        Back to Login
      </button>
      <Footer />
    </div>
  );
};

export default ResetPassword;
