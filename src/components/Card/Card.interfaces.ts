import { ReactNode } from "react";

import { IAdditionalClassNames, ITitle } from "../../interfaces";

export interface CardProps extends IAdditionalClassNames, ITitle {
  children: ReactNode;
  settingsButton?: ReactNode;
  size?: "medium" | "small";
}
