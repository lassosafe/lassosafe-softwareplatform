// pages/api/create-checkout-session.js
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import User from "@/models/user";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    console.log(cancelledSubscription);
    await connectMongoDB();
    const { stripeSubscriptionId, email, accountExpirationDate } =
      await req.json();
    console.log(email);
    console.log(stripeSubscriptionId);
    console.log(accountExpirationDate);
    console.log(typeof accountExpirationDate);

    const accountExpirationDateFormatted = new Date(accountExpirationDate);
    console.log(accountExpirationDateFormatted);
    console.log(typeof accountExpirationDateFormatted);

    const subscription = await stripe.subscriptions.update(
      stripeSubscriptionId,
      {
        cancel_at_period_end: true,
      }
    );

    await User.updateOne(
      {
        email: email,
      },
      {
        $set: {
          hasCanceled: true,
          name: "test here",
          testString: "t",
        },
      }
    );
    //console.log(res);
    //console.log(await res.json());
    return NextResponse.json({}, { status: 200 });
    //res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
    //res.status(500).json({ error: err.message });
  }
}
