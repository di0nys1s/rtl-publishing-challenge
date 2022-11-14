import cx from "classnames";

import { PagePreviewCardProps } from "./PagePreviewCard.interfaces";

import "./PagePreviewCard.css";

const PagePreviewCard = ({
  additionalClassNames,
  contentDescription,
  contentDescriptionMaxLength,
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
      <div
        data-testid="qa-page-preview-card"
        className={pagePreviewCardClassNames}
      >
        <div className="c-page-preview-card__image-container">
          <img
            alt={altText}
            className="c-page-preview-card__image"
            loading="lazy"
            src={src}
          />
        </div>

        <TitleTag data-testid="qa-title" className="c-page-preview-card__title">
          {title}
        </TitleTag>

        <span className="c-page-preview-card__sub-title">{subTitle}</span>

        <TitleTag className="c-page-preview-card__content-title">
          {contentTitle}
        </TitleTag>

        <p
          data-testid="qa-content-description"
          className="c-page-preview-card__content-description"
        >
          {contentDescription?.substring(
            0,
            contentDescriptionMaxLength
              ? contentDescriptionMaxLength
              : contentDescription.length
          )}
        </p>

        {coverLink}
      </div>
    </article>
  );
};

export { PagePreviewCard };
