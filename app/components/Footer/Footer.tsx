/**
 * shared reusable component for the Lasso Safe footer 
 * shown under every component
 */
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="dashboard-footer">
      <p className="dashboard-footer-text">
        {"\u00A9"} 2012-2025 Lasso Safe Inc. All rights reserved. Patent
        pending.
      </p>
    </footer>
  );
}
