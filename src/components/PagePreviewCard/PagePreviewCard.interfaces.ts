import {
  IAdditionalClassNames,
  ICoverLink,
  IImage,
  ISubTitle,
  ITitle,
  ISupportiveText,
} from "../../interfaces";

export interface PagePreviewCardProps
  extends IAdditionalClassNames,
    ICoverLink,
    ISubTitle,
    ITitle,
    ISupportiveText {
  contentDescription?: string;
  contentDescriptionMaxLength?: number;
  contentTitle?: string;
  image: IImage;
  isHero?: boolean;
  isPageTitle?: boolean;
}
