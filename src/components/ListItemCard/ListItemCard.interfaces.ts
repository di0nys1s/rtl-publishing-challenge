import { PagePreviewCardProps } from "../PagePreviewCard";

export interface ListItemCardProps extends PagePreviewCardProps {
  contentDescriptionMaxLength?: number;
  size?: "medium" | "small";
}
