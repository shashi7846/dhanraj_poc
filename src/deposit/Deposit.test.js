import { render, screen } from "@testing-library/react";

import { renderComponent } from "../utils/test_helpers";
import Deposit from "./Deposit";

describe("Deposit page", () => {
  test("Should Render Intial Page", () => {
    render(renderComponent(<Deposit />));
    const text1 = screen.getAllByText(/Deposit Amount/i);
  });
  test("should test page link ", () => {
    render(renderComponent(<Deposit />));
    expect(screen.getByRole("button", { name: "Deposit" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Deposit amount")).toBeInTheDocument();
  });
  test("Matching the snapshot of the Deposit", async () => {
    const { asFragment } = render(renderComponent(<Deposit />));
    expect(asFragment()).toMatchSnapshot();
  });
});
