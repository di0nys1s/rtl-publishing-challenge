import { ReactNode } from "react";

export interface PageLayoutProps {
  additionalClassNames?: string;
  children?: ReactNode;
  containerAlignment?: "center" | "left" | "right";
  footer: ReactNode;
  header: ReactNode;
}
