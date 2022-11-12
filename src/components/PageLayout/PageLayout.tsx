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
}: PageLayoutProps) => {
  return (
    <div className={cx(additionalClassNames, "c-page-layout")} id="root">
      {header}
      <Container alignment={containerAlignment}>{children}</Container>
      {footer}
    </div>
  );
};

export { PageLayout };
