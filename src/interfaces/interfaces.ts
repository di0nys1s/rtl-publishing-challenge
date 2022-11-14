import { ReactNode } from "react";

export interface IAdditionalClassNames {
  additionalClassNames?: string;
}

export interface ICoverLink {
  coverLink?: ReactNode;
}

export interface IImage {
  altText: string;
  src: string;
}

export interface ISubTitle {
  subTitle?: string;
}

export interface ISupportiveText {
  supportiveText: string;
}

export interface ITitle {
  title?: string;
}
