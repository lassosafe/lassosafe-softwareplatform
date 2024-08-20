import { authOptions } from "@/lib/auth";
import RegisterForm from "../../components/Accounts/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
  return <RegisterForm />;
}
