import { render, screen } from "@testing-library/react";
import { renderComponent } from "../utils/test_helpers";

import Userregister from "./Userregister";

describe("Register page", () => {
  test("Should Render Intial Page", () => {
    render(renderComponent(<Userregister />));
    const text1 = screen.getAllByText(/Register/i);
  });
  test("should test page link ", () => {
    render(renderComponent(<Userregister />));
    expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  });
  test("should test page buttons ", () => {
    render(renderComponent(<Userregister />));
    expect(
      screen.getByRole("button", {
        name: /Register/i,
      })
    );
  });
  test("Matching the snapshot of the Register", async () => {
    const { asFragment } = render(renderComponent(<Userregister />));
    expect(asFragment()).toMatchSnapshot();
  });
});
