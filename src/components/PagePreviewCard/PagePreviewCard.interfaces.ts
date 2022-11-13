import {
  IAdditionalClassNames,
  ICoverLink,
  IImage,
  ISubTitle,
  ITitle,
} from "../../interfaces";

export interface PagePreviewCardProps
  extends IAdditionalClassNames,
    ICoverLink,
    ISubTitle,
    ITitle {
  contentDescription?: string;
  contentTitle?: string;
  image: IImage;
  isHero?: boolean;
  isPageTitle?: boolean;
}
