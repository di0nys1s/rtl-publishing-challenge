import { render, screen } from "@testing-library/react";
import { CardList } from "./CardList";

describe("CardList", () => {
  it("should display the CardList", () => {
    render(<CardList />);

    const cardList = screen.queryByTestId("qa-card-list");

    expect(cardList).toBeInTheDocument();
    expect(cardList).toHaveClass("c-card-list");
  });

  describe("When there are items in the card list", () => {
    it("should display the items in the card", () => {
      const items = [
        <div data-testid="qa-card-list-item">Item 1</div>,
        <div data-testid="qa-card-list-item">Item 2</div>,
      ];

      render(<CardList items={items} />);

      const cardListItems = screen.queryAllByTestId("qa-card-list-item");

      expect(cardListItems).toHaveLength(2);
    });
  });
});
