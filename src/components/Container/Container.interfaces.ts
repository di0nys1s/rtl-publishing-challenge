import { ReactNode } from "react";

export interface ContainerProps {
  additionalClassNames?: string;
  alignment?: "center" | "left" | "right";
  children?: ReactNode;
  isNarrow?: boolean;
}
