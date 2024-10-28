import ViewerSharing from "@/app/components/ViewerSharing/ViewerSharing";
import { Suspense } from "react";

export default function ViewerSharingPage() {
  return (
    <Suspense>
      <ViewerSharing />
    </Suspense>
  );
}
