import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ResetPasswordEmailTemplate } from "../components/Accounts/ResetPasswordEmailTemplate";
import Users from "../../models/users";
import { connectMongoDB } from "../../lib/mongodb";

export const sendResetEmail = async (user, token) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log("in send reset email");
  console.log(user);

  try {
    await connectMongoDB();
    const data = await resend.emails.send({
      from: "Lasso Safe Sports Wellness Platform <resetpassword@mysportswellness.com>",
      to: "ashlsmit20@gmail.com",
      subject: "Reset Password Request",
      react: ResetPasswordEmailTemplate({ token: token, name: user.name }),
    });
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
