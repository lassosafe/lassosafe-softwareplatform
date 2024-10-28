import Dashboard from "@/app/components/DashboardComponents/Dashboard";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <Suspense>
      <Dashboard />
    </Suspense>
  );
}
