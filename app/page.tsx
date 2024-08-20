import LoginForm from "./components/Accounts/LoginForm";
import { NextAuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("pages/dashboard");
  return (
    <main>
      <LoginForm />
    </main>
  );
}
