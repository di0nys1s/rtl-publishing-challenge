import { ReactNode } from "react";

import { IAdditionalClassNames } from "../../interfaces";
export interface PageLayoutProps extends IAdditionalClassNames {
  children?: ReactNode;
  childrenTopBanner?: ReactNode;
  containerAlignment?: "center" | "left" | "right";
  footer: ReactNode;
  header: ReactNode;
}
