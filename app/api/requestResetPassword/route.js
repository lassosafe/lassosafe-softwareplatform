import { connectMongoDB } from "../../../lib/mongodb";
import Users from "../../../models/users";
import { NextResponse } from "next/server";
import { sendResetEmail } from "../../constants/sendEmail";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  await connectMongoDB();
  const { email } = await req.json();
  console.log(email);

  try {
    const user = await Users.findOne({ email });
    console.log(user);
    if (!user) {
      return NextResponse.json({ status: 404, message: "User not found" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log(token);

    await sendResetEmail(user, token); // Implement your email sending logic
    return NextResponse.json({ status: 200, message: "Reset email sent" });
  } catch (error) {
    return NextResponse.json({ status: 405, message: error });
  }
}
