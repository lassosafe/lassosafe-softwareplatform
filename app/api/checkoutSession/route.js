// pages/api/create-checkout-session.js
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const firstYearPlatformFee = {
  price: "price_1Q72cwDtt4SMJazLJPKOOW6k",
  quantity: 1,
};

const recurringPlatformFee = {
  price: "price_1Q72fRDtt4SMJazL3LCYuT0K",
  quantity: 1,
};

const participantFeePriceId = "price_1Q72rLDtt4SMJazLTqY5nCjb";

export async function POST(req) {
  const { numParticipants } = await req.json();

  const participantFee = {
    price: participantFeePriceId,
    quantity: numParticipants,
  };

  console.log(numParticipants);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [recurringPlatformFee, firstYearPlatformFee, participantFee],
      success_url: `http://localhost:3000/pages/register?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/pages/paymentFailed`,
    });
    return NextResponse.json({ sessionId: session.id }, { status: 200 });
    //res.status(200).json({ sessionId: session.id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
    //res.status(500).json({ error: err.message });
  }
}
