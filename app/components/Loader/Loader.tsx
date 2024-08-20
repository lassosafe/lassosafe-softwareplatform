import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./Loader.scss";

type LoaderProps = Readonly<{
  message?: string;
}>;
export function Loader({ message = "Loading..." }: LoaderProps) {
  return (
    <div className="loader-component">
      <FontAwesomeIcon className="loader-icon" icon={faSpinner} spin />
      <span className="loader-message">{message}</span>
    </div>
  );
}
