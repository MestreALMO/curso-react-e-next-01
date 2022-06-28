import { render } from "@testing-library/react";
import App from "./App";

const props = {
  title: "Lorem Ipsum",
  text: "Lorem Ipsum",
};

describe("<App />", () => {
  it("should render app correctly", () => {
    render(<App />);
  });
});
