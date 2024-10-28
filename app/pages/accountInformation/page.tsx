import AccountSettings from "@/app/components/Accounts/AccountSettings";
import { Suspense } from "react";

export default async function AccountInformation() {
  return (
    <Suspense>
      <AccountSettings />
    </Suspense>
  );
}
