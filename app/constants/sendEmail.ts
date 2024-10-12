import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ResetPasswordEmailTemplate } from "../components/Accounts/ResetPasswordEmailTemplate";
import { connectMongoDB } from "../../lib/mongodb";

export const sendResetEmail = async (user, token) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await connectMongoDB();
    const data = await resend.emails.send({
      from: "Lasso Safe Sports Wellness Platform <resetpassword@mysportswellness.com>",
      to: user.email,
      subject: "Reset Password Request",
      react: ResetPasswordEmailTemplate({ token: token, name: user.name }),
    });
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
