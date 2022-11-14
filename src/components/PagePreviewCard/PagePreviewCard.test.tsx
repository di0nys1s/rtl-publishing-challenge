import { render, screen } from "@testing-library/react";
import { PagePreviewCard } from "./PagePreviewCard";

describe("PagePreviewCard", () => {
  const image = {
    altText: "page preview",
    src: "test.png",
  };

  const supportiveTest = "Page preview card";

  it("should display the PagePreviewCard", () => {
    render(<PagePreviewCard image={image} supportiveText={supportiveTest} />);
    const pagePreviewCard = screen.queryByTestId("qa-page-preview-card");

    expect(pagePreviewCard).toBeInTheDocument();
    expect(pagePreviewCard).toHaveClass("c-page-preview-card");
  });

  describe("When title is passed", () => {
    it("should display the title in PagePreviewCard", () => {
      const title = "Test title";

      render(
        <PagePreviewCard
          image={image}
          title={title}
          supportiveText={supportiveTest}
        />
      );
      const cardContentTitle = screen.queryByTestId("qa-title");

      expect(cardContentTitle).toHaveTextContent(title);
    });
  });

  describe("When content description is passed", () => {
    it("should display the content description in PagePreviewCard", () => {
      const description = "Test description";

      render(
        <PagePreviewCard
          image={image}
          contentDescription={description}
          supportiveText={supportiveTest}
        />
      );
      const cardContentDescription = screen.queryByText(description);

      expect(cardContentDescription).toHaveTextContent(description);
    });
  });

  describe("When content description is passed with limit", () => {
    it("should display the content description sliced in PagePreviewCard", () => {
      const description = "Test description";

      render(
        <PagePreviewCard
          image={image}
          contentDescription={description}
          contentDescriptionMaxLength={5}
          supportiveText={supportiveTest}
        />
      );
      const cardContentDescription = screen.queryByTestId(
        "qa-content-description"
      );

      expect(cardContentDescription).toHaveTextContent("Test");
    });
  });
});
