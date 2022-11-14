import { render, screen } from "@testing-library/react";
import { CoverLink } from "./CoverLink";

describe("CoverLink", () => {
  it("should display the CoverLink", () => {
    const href =
      "https://www.rtlboulevard.nl/entertainment/showbizz/bundel/4532761/de-uitschieters-van-2018";

    render(<CoverLink href={href} supportiveText="Test Supportive Text" />);
    const coverLink = screen.queryByTestId("qa-cover-link");

    expect(coverLink).toBeInTheDocument();
    expect(coverLink).toHaveClass("c-cover-link");
    expect(coverLink).toHaveAttribute("href", href);
  });

  describe("When class assigned to CoverLink component", () => {
    it("should have the class assigned to asset", () => {
      const additionalClassName = "c-additional-cover-link";

      render(
        <CoverLink
          additionalClassNames={additionalClassName}
          href="https://www.google.com.au"
          supportiveText="Test Supportive Text"
        />
      );
      const coverLink = screen.queryByTestId("qa-cover-link");
      expect(coverLink).toHaveClass(additionalClassName);
    });
  });

  describe("When CoverLink has a supportive text", () => {
    it("should include the supportive text", () => {
      const supportiveText = "Publishing link";

      render(
        <CoverLink
          href="https://www.google.com.au"
          supportiveText={supportiveText}
        />
      );

      const coverLink = screen.getByText(supportiveText);
      expect(coverLink).toBeInTheDocument();
    });
  });
});
