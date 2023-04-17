import { render, screen } from "@testing-library/react";

import { renderComponent } from "../utils/test_helpers";
import Navbar from "./Navbar";

describe("Navbar page", () => {
  test("Should Render Intial Page", () => {
    render(renderComponent(<Navbar />));
    const text1 = screen.getAllByText(/D-Bank/i);
  });

  test("should test page link ", () => {
    render(renderComponent(<Navbar />));
    expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Register" })).toBeInTheDocument();
    // expect(screen.getByRole("link", { name: "Withdraw" })).toBeInTheDocument();
  });
  test("Matching the snapshot of the navbar", async () => {
    const { asFragment } = render(renderComponent(<Navbar />));
    expect(asFragment()).toMatchSnapshot();
  });
});
