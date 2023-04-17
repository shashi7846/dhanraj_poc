import { render, screen } from "@testing-library/react";
import { renderComponent } from "../utils/test_helpers";
import Userlogin from "./Userlogin";

describe("Login page", () => {
  test("Should Render Intial Page", () => {
    render(renderComponent(<Userlogin />));
    const text1 = screen.getAllByText(/Login/i);
  });
  test("should test page link ", () => {
    render(renderComponent(<Userlogin />));
    expect(screen.getByRole("link", { name: "Register" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
  });
  test("should test page buttons ", () => {
    render(renderComponent(<Userlogin />));
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
  test("Matching the snapshot of the Login", async () => {
    const { asFragment } = render(renderComponent(<Userlogin />));
    expect(asFragment()).toMatchSnapshot();
  });
});
