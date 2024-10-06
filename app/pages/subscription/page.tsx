"use client";
import Subscription from "@/app/components/Payment/Subscription";
import SubscribeComponent from "@/app/components/Payment/SubscriptionComponent";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function SubscriptionPage() {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  return (
    <Elements stripe={stripePromise}>
      <Subscription />
    </Elements>
  );
}
