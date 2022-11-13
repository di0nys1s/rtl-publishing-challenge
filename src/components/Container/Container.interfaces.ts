import { ReactNode } from "react";

import { IAdditionalClassNames } from "./../../interfaces";

export interface ContainerProps extends IAdditionalClassNames {
  alignment?: "center" | "left" | "right";
  children?: ReactNode;
  isNarrow?: boolean;
}
