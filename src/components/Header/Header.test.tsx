import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("should display the header", () => {
    render(<Header />);
    const header = screen.queryByTestId("qa-header");

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("c-header");
  });

  describe("When logo assigned to Header component", () => {
    it("should have the image and link", () => {
      const logo = {
        href: "https://www.google.com.au",
        imageSrc: "/logo.png",
      };

      render(<Header logo={logo} />);
      const header = screen.queryByAltText("Site logo");

      expect(header).toHaveClass("c-header__image");
    });
  });

  describe("When there is no middle children", () => {
    it("should not have the content", () => {
      render(<Header />);
      const header = screen.queryByTestId("qa-children-middle");

      expect(header).toBeFalsy();
    });
  });
});
