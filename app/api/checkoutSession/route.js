// pages/api/create-checkout-session.js
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { priceId, numParticipants } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId, // Replace with your actual Stripe Price ID
          quantity: 1,
        },
        {
          price: "price_1Q6nHDDtt4SMJazLnWO83jI8", // Replace with your actual Stripe Price ID
          quantity: 1,
        },
        {
          price: "price_1Q6nWyDtt4SMJazLbJngIEN2",
          quantity: numParticipants,
        },
      ],
      success_url: `http://localhost:3000/pages/register?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000`,
    });
    return NextResponse.json({ sessionId: session.id }, { status: 200 });
    //res.status(200).json({ sessionId: session.id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
    //res.status(500).json({ error: err.message });
  }
}
