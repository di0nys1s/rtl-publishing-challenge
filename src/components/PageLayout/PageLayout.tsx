import React from "react";

import cx from "classnames";

import { PageLayoutProps } from "./PageLayout.interfaces";

import { Container } from "../Container";

import "./PageLayout.css";

const PageLayout: React.FC<PageLayoutProps> = ({
  additionalClassNames,
  containerAlignment = "left",
  header,
  footer,
  children,
  childrenTopBanner,
}: PageLayoutProps) => {
  return (
    <div className={cx(additionalClassNames, "c-page-layout")} id="root">
      {header}

      {Boolean(childrenTopBanner) && (
        <div className="c-page-layout__top-banner">{childrenTopBanner}</div>
      )}

      <Container alignment={containerAlignment}>{children}</Container>
      {footer}
    </div>
  );
};

export { PageLayout };
