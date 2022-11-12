import { ContainerProps } from "./Container.interfaces";

import cx from "classnames";

import "./Container.css";

const Container = ({
  additionalClassNames,
  alignment = "center",
  children,
  isNarrow = false,
}: ContainerProps) => {
  return (
    <div
      className={cx(
        "l-container",
        `l-container--is-align-${alignment}`,
        additionalClassNames,
        {
          "l-container--is-narrow": isNarrow,
        }
      )}
    >
      {children}
    </div>
  );
};
export { Container };
