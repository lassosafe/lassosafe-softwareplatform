import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import User from "../../../models/user";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email, newName } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log(email);

    await User.updateOne(
      {
        email: email,
      },
      {
        $set: {
          name: newName,
        },
      }
    );
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
