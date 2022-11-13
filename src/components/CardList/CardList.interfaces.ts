import { ReactNode } from "react";

import { IAdditionalClassNames } from "../../interfaces";

export interface CardListProps extends IAdditionalClassNames {
  items?: ReactNode[];
}
