import React from "react";

import cx from "classnames";

import { PagePreviewCardProps } from "./PagePreviewCard.interfaces";

import "./PagePreviewCard.css";

const PagePreviewCard = ({
  additionalClassNames,
  contentDescription,
  contentTitle,
  coverLink,
  image: { altText, src },
  isPageTitle = false,
  subTitle,
  title,
}: PagePreviewCardProps) => {
  const pagePreviewCardClassNames = cx(
    "c-page-preview-card",
    additionalClassNames
  );

  const TitleTag = isPageTitle ? "h1" : "span";

  return (
    <article className="c-page-preview-card__container">
      <div className={pagePreviewCardClassNames}>
        <div className="c-page-preview-card__image-container">
          <img
            alt={altText}
            className="c-page-preview-card__image"
            loading="lazy"
            src={src}
          />
        </div>

        <TitleTag className="c-page-preview-card__title">{title}</TitleTag>

        <span className="c-page-preview-card__sub-title">{subTitle}</span>

        <TitleTag className="c-page-preview-card__content-title">
          {contentTitle}
        </TitleTag>

        <p className="c-page-preview-card__content-description">
          {contentDescription?.substring(0, 75)}
        </p>

        {coverLink}
      </div>
    </article>
  );
};

export { PagePreviewCard };
