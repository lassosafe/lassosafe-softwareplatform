import Image from "next/image";
import horizontallogo from "../../../public/images/logo-horizontal.png";

import "./ResetPasswordEmailTemplate.scss";

type ResetPasswordEmailTemplateProps = {
  token: string;
  name: string;
};

export function ResetPasswordEmailTemplate({
  token,
  name,
}: ResetPasswordEmailTemplateProps) {
  return (
    <div>
      <p>Hello, {name}!</p>
      <p>Copy the token below, then link below to reset your password.</p>
      <p>
        <b>{token}</b>
      </p>
      <br />
      <a
        className="reset-password-button"
        href={`${process.env.NEXT_PUBLIC_AUTH_URL}/pages/resetPassword`}
      >
        Reset Password
      </a>
      <p>Thank you,</p>
      <p>LassoSafe Team</p>
      <img
        className="horizontal-logo-image"
        src={"../../../public/images/logo-horizontal.png"}
        alt="horizontallogo"
        //objectFit="contain"
      ></img>
    </div>
  );
}
