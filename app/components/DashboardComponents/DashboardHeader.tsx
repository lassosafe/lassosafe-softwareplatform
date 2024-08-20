import { Button } from "@nextui-org/react";
import Image from "next/image";
import horizontallogowhite from "../../../public/images/logo-horizontal-white.png";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import "./DashboardHeader.scss";

export function DashboardHeader() {
  //const { data: session } = useSession();

  const userSignOut = () => {
    signOut({ callbackUrl: "https://lassosafe-dashboard.vercel.app/" });
  };

  return (
    <header className="dashboard-header">
      <Image
        src={horizontallogowhite}
        alt="horizontallogo"
        objectFit="contain"
        className="header-logo"
      ></Image>
      <div className="header-right-items">
        {/* <p className="header-name">{session?.user?.name}</p> */}
        <Button className="logout-button" onClick={() => userSignOut()}>
          Logout
        </Button>
      </div>
    </header>
  );
}
