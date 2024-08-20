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
      }

      router.replace("/pages/dashboard");
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
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2">
            Log In
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          {/* <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link> */}
        </form>
      </div>
    </div>
  );
}
