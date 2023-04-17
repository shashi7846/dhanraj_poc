import { render, screen } from "@testing-library/react";

import Home from "./Home";
import { renderComponent } from "../utils/test_helpers";

describe("Home page", () => {
  test("Should Render Intial Page", () => {
    render(renderComponent(<Home />));
    const text1 = screen.getAllByText(/Welcome to D-Bank/i);
  });
  test("Matching the snapshot of the Home", async () => {
    const { asFragment } = render(renderComponent(<Home />));
    expect(asFragment()).toMatchSnapshot();
  });
});
