import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import Users from "../../../models/users";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await Users.findOne({ email }).select("_id");
    console.log(email);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
