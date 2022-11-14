import { CSSProperties, ElementType, ReactNode } from "react";

export type HeaderLogoHrefType = {
  href?: string;
};

export type HeaderLogoType = {
  imageSrc?: string;
  href: string;
};

export interface HeaderProps {
  children?: ReactNode;
  background?: CSSProperties["background"];
  childrenMiddle?: ReactNode;
  linkComponent?: ElementType;
  logo?: HeaderLogoType;
}
