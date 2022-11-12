import cx from "classnames";

import {
  SPINNER_ICON_BORDER_SIZES_MAP_IN_REM,
  SPINNER_ICON_SIZES_IN_REM,
} from "./Spinner.constants";
import { SpinnerProps } from "./Spinner.interfaces";

import "./Spinner.css";

const Spinner = ({
  isLoading = false,
  spinnerIconSize = "default",
}: SpinnerProps) => {
  if (!isLoading) {
    return null;
  }

  const spinnerIconStyle = {
    borderWidth: `${SPINNER_ICON_BORDER_SIZES_MAP_IN_REM[spinnerIconSize]}rem`,
    height: `${SPINNER_ICON_SIZES_IN_REM[spinnerIconSize]}rem`,
    width: `${SPINNER_ICON_SIZES_IN_REM[spinnerIconSize]}rem`,
  };

  return (
    <div
      aria-live="assertive"
      className={cx(["c-spinner__container"])}
      role="alert"
    >
      <div
        className={cx(["c-spinner__icon"])}
        style={spinnerIconStyle}
        aria-hidden
      >
        <p className="h-hide-visually">Content is loading</p>
      </div>
    </div>
  );
};

export { Spinner };
