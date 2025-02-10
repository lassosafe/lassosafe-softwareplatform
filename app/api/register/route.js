import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Users from "../../../models/users";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const {
      name,
      email,
      password,
      stripeSubscriptionId,
      numberParticipants,
      isUmbrella,
    } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10);

    await connectMongoDB();
    await Users.create({
      name,
      email,
      stripeSubscriptionId,
      accountCreationDate: new Date(Date.now()),
      hasCanceled: false,
      accountExpirationDate: expirationDate,
      password: hashedPassword,
      numberParticipants,
      isUmbrella,
    });
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred while registering" },
      { status: 500 }
    );
  }
}
