"use client";
import ViewerSubscription from "@/app/components/Payment/ViewerSubscription";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function ViewerSubscriptionPage() {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  return (
    <Elements stripe={stripePromise}>
      <ViewerSubscription />
    </Elements>
  );
}
