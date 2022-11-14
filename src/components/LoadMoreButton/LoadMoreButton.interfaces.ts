import { IBundleItem } from "./../../hooks/useGetPublishing/useGetPublishing.interfaces";
import { ReactNode } from "react";

export interface LoadMoreButtonProps {
  data: IBundleItem[];
  loadSize: number;
  onClick: () => void;
  buttonText: string;
  message: ReactNode;
}
