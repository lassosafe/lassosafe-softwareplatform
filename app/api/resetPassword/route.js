import { connectMongoDB } from "../../../lib/mongodb";
import Users from "../../../models/users";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await connectMongoDB();

  const { token, newPassword } = await req.json();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Users.findById(decoded.id);

    if (!user) {
      return NextResponse.json({ status: 404, message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword; // Make sure to hash the password before saving
    await user.save();

    return NextResponse.json({
      status: 200,
      message: "Password updated successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Invalid or expired token",
    });
  }
}
