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

export interface ICrop {
  path: string;
}

export interface IAfbeelding {
  crops: ICrop[];
}

export interface IAangemaaktDatum {
  formatted: string;
}

export interface IBundleItem {
  id: number;
  urlAlias: string;
  titel: string;
  afbeelding: IAfbeelding;
  lead: string;
  aangemaaktDatum: IAangemaaktDatum;
  labelValue: string;
}

export interface IPublishingData {
  title: string;
  description: string;
  image: IImage;
  label: string;
  bundleItems: IBundleItem[];
}
