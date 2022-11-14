import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { LoadMoreButton } from "./LoadMoreButton";

describe("Button", () => {
  const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const message = "Test message";
  const loadSize = 5;
  const buttonText = "Test button text";
  const onClick = jest.fn();

  it("Should display the Load more button component in the document", () => {
    render(
      <LoadMoreButton
        buttonText={buttonText}
        data={items as any}
        loadSize={loadSize}
        message={message}
        onClick={onClick}
      />
    );

    const button = screen.queryByTestId("qa-load-more");
    expect(button).toBeInTheDocument();
  });

  describe("When all data is loaded", () => {
    it("should not display the button", () => {
      render(
        <LoadMoreButton
          buttonText={buttonText}
          data={items as any}
          loadSize={15}
          message={message}
          onClick={onClick}
        />
      );

      const button = screen.queryByTestId("qa-load-more-button");
      const loadMessage = screen.queryByTestId("qa-load-message");

      expect(button).not.toBeInTheDocument();
      expect(loadMessage).toBeInTheDocument();
    });
  });

  describe("onClick prop", () => {
    describe("When the onClick prop is set", () => {
      const onClickSpy = jest.fn();

      describe("When load button is clicked", () => {
        it("Should call the onClick function 1 time", () => {
          render(
            <LoadMoreButton
              buttonText={buttonText}
              data={items as any}
              loadSize={5}
              message={message}
              onClick={onClickSpy}
            />
          );

          const button = screen.queryByTestId(
            "qa-load-more-button"
          ) as HTMLButtonElement;

          fireEvent.click(button);

          expect(onClickSpy).toBeCalledTimes(1);

          expect(items.length).toEqual(10);
        });
      });
    });
  });
});
