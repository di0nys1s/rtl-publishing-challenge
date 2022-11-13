import { ReactNode } from "react";

import { IAdditionalClassNames } from "../../../interfaces";
export interface PublishingPageProps extends IAdditionalClassNames {
  children: ReactNode;
}

export interface IImageCrops {
  height: number;
  path: string;
  ratio: string;
  width: number;
}

export interface IImage {
  crops: IImageCrops[];
  imageUrl: string;
  type: string;
}

export interface IPublishingData {
  title: string;
  description: string;
  image: IImage;
  label: string;
  bundleItems: any[];
}
