import "./LoadMoreButton.css";

import { LoadMoreButtonProps } from "./LoadMoreButton.interfaces";

const LoadMoreButton = ({
  data,
  loadSize,
  onClick,
  buttonText,
  message,
}: LoadMoreButtonProps) => {
  return (
    <div className="c-load-more" data-testid="qa-load-more">
      {data.length > loadSize ? (
        <button
          data-testid="qa-load-more-button"
          className="c-load-more-button"
          onClick={onClick}
        >
          {buttonText}
        </button>
      ) : (
        <div data-testid="qa-load-message">{message}</div>
      )}
    </div>
  );
};

export { LoadMoreButton };
