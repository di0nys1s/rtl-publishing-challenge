import cx from "classnames";

import { ListItemCardProps } from "./ListItemCard.interfaces";

import "./ListItemCard.css";

const ListItemCard = ({
  additionalClassNames,
  contentTitle,
  contentDescription,
  contentDescriptionMaxLength,
  coverLink,
  image: { altText, src },
  isPageTitle = false,
  size = "medium",
  subTitle,
  supportiveText,
  title,
}: ListItemCardProps) => {
  const TitleTag = isPageTitle ? "h1" : "span";

  return (
    <div className={cx("c-list-item-card", additionalClassNames)}>
      <div className="c-list-item-card__title-section">
        <img
          alt={altText}
          className={cx("c-list-item-card__title-section-image", [
            `c-list-item-card__title-section-image--${size}`,
          ])}
          src={src}
        />

        <div className="c-list-item-card__title-section-content">
          <TitleTag className="c-page-preview-card__title">{title}</TitleTag>

          <span className="c-page-preview-card__sub-title">{subTitle}</span>

          <TitleTag className="c-page-preview-card__content-title">
            {contentTitle}
          </TitleTag>

          <p className="c-page-preview-card__content-description">
            {contentDescription?.substring(
              0,
              contentDescriptionMaxLength
                ? contentDescriptionMaxLength
                : contentDescription.length
            )}
          </p>
        </div>
      </div>

      <span className="h-hide-visually">{supportiveText}</span>

      {coverLink}
    </div>
  );
};

export { ListItemCard };
