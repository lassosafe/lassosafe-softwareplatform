import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import Users from "../../../models/users";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    console.log(email);
    const correspondingUser = await Users.findOne({ email });
    return NextResponse.json({
      correspondingUser,
    });
  } catch (error) {
    console.log(error);
  }
}
