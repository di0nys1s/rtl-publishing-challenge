import cx from "classnames";

import { CardProps } from "./Card.interfaces";
import "./Card.css";

const Card = ({
  additionalClassNames,
  children,
  settingsButton,
  size = "medium",
  title,
}: CardProps) => {
  const cardClassNames = cx("c-card", additionalClassNames, {
    "c-card--small": size === "small",
    "c-card--medium": size === "medium",
  });

  return (
    <article className="c-card__container" data-testid="qa-card">
      <div className={cardClassNames}>
        {size !== "small" ? (
          <div className="c-card__header">
            <span className="c-card__title">{title}</span>
            <div className="c-card__settings-button">{settingsButton}</div>
          </div>
        ) : (
          <div className="c-card__settings-button--small">{settingsButton}</div>
        )}
        {children}
      </div>
    </article>
  );
};

export { Card };
