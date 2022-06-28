import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InfoCard } from ".";
import mock from "./mock";

describe("<InfoCard />", () => {
  it("should render InfoCard correctly", () => {
    render(<InfoCard {...mock} />);

    expect(screen.getByRole("img", { ...mock })).toBeInTheDocument();
    expect(screen.getByRole("img", { ...mock })).toHaveAttribute(
      "src",
      require("../../images/thumbnails/styled-components.png")
    );
  });

  it("should match snapshot", () => {
    const { container } = render(<InfoCard />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
