import LoginForm from "./components/Accounts/LoginForm";
import { NextAuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  let session;
  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    console.error("Error fetching session:", error);
    return <div>Error fetching session.</div>;
  }
  if (session) redirect("pages/dashboard");
  return (
    <main>
      <LoginForm />
    </main>
  );
}
