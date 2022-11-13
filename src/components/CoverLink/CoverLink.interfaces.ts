import { ElementType } from "react";

import { IAdditionalClassNames } from "../../interfaces";

export interface CoverLinkProps extends IAdditionalClassNames {
  href: string;
  linkComponent?: ElementType;
  supportiveText: string;
}
