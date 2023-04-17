import { render, screen } from "@testing-library/react";
import { renderComponent } from "../utils/test_helpers";
import BankingStatement from "./Banking";

describe("Home page", () => {
  test("Should Render Intial Page", () => {
    render(renderComponent(<BankingStatement />));
    const text1 = screen.getAllByText(/Banking Statement/i);
  });

  test("Matching the snapshot of the navbar", async () => {
    const { asFragment } = render(renderComponent(<BankingStatement />));
    expect(asFragment()).toMatchSnapshot();
  });
});
