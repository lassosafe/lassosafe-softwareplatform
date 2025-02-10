// pages/api/create-checkout-session.js
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const umbrellaMonthlyPriceIdTest = "price_1QGAgGDtt4SMJazLHPSQnszD";
const umbrellaAnnuallyPriceIdTest = "price_1QGAepDtt4SMJazLKSOoqSNJ";

const umbrellaAnnuallyPriceId = "price_1QH5goDtt4SMJazLNdJzZj2B";
const umbrellaMonthlyPriceId = "price_1QH5iDDtt4SMJazLalxYgrul";

export async function POST(req) {
  const { annualRevenueString, paymentFrequencyString } = await req.json();
  console.log(annualRevenueString);
  console.log(paymentFrequencyString);

  let priceId;
  if (paymentFrequencyString.includes("Monthly")) {
    priceId = umbrellaMonthlyPriceId;
  } else {
    priceId = umbrellaAnnuallyPriceId;
  }

  let quantity;
  if (annualRevenueString.includes("4.9M")) {
    quantity = 1;
  } else if (annualRevenueString.includes("499M")) {
    quantity = 5000000;
  } else {
    quantity = 500000000;
  }

  const umbrellaFee = {
    price: priceId,
    quantity: quantity,
  };

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [umbrellaFee],
      success_url: `${process.env.NEXT_PUBLIC_AUTH_URL}/pages/register?session_id={CHECKOUT_SESSION_ID}&isUmbrella=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_AUTH_URL}/pages/paymentFailed`,
    });
    return NextResponse.json({ sessionId: session.id }, { status: 200 });
    //res.status(200).json({ sessionId: session.id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
    //res.status(500).json({ error: err.message });
  }
}
