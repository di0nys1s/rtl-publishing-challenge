export type SpinnerIconSizeType = "default" | "large" | "medium" | "small";

export interface SpinnerProps {
  isLoading: boolean;
  spinnerIconSize?: SpinnerIconSizeType;
}
