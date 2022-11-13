import "./Footer.css";

import { FooterProps } from "./Footer.interfaces";

const Footer = ({ children }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="c-footer">
      <div className="c-footer__left">{children}</div>

      <div className="c-footer__right">
        <span>RTL &copy; {currentYear}</span>
      </div>
    </footer>
  );
};

export { Footer };
