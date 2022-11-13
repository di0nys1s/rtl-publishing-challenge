import cx from "classnames";

import { CoverLinkProps } from "./CoverLink.interfaces";
import "./CoverLink.css";

const CoverLink = ({
  additionalClassNames,
  href,
  linkComponent = "a",
  supportiveText,
}: CoverLinkProps) => {
  const coverLinkClassNames = cx("c-cover-link", additionalClassNames);

  const Link = linkComponent;

  return (
    <Link
      className={coverLinkClassNames}
      data-testid="qa-cover-link"
      href={href}
    >
      <span className="h-hide-visually">{supportiveText}</span>
    </Link>
  );
};

export { CoverLink };
