import React from "react";

import cx from "classnames";

import { CardListProps } from "./CardList.interfaces";

import "./CardList.css";

const CardList = ({ additionalClassNames, items }: CardListProps) => {
  const cardListClassNames = cx("c-card-list", additionalClassNames);

  return (
    <div className={cardListClassNames} data-testid="qa-card">
      {items.map((item) => item)}
    </div>
  );
};

export { CardList };
