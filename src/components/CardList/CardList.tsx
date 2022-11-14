import React from "react";

import cx from "classnames";

import { CardListProps } from "./CardList.interfaces";

import "./CardList.css";

const CardList = ({ additionalClassNames, items }: CardListProps) => {
  const cardListClassNames = cx("c-card-list", additionalClassNames);

  const itemsList = items?.map((item, index) => (
    <span className="c-card-list__item" key={index}>
      {item}
    </span>
  ));

  return (
    <div className={cardListClassNames} data-testid="qa-card-list">
      {itemsList}
    </div>
  );
};

export { CardList };
