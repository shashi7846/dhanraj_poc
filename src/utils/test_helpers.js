import { BrowserRouter } from "react-router-dom";
//import { render } from "@testing-library/react";

export const renderComponent = (component) => {
  return <BrowserRouter>{component}</BrowserRouter>;
};
