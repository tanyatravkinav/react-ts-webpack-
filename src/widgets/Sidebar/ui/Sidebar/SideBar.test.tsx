import { render, screen } from "@testing-library/react";
import { SideBar } from "./Sidebar";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";
import { fireEvent } from "@testing-library/dom";

describe("test Sidebar", () => {
  test("render Sidebar", () => {
    // const SideBarWithTranslation = withTranslation()(SideBar)
    // render(<SideBarWithTranslation />);
    // expect(screen.getByText("toggle")).toBeInTheDocument();

    renderWithTranslation(<SideBar />)
    expect(screen.getByTestId("sidebar"))
  });

  test("toggle Sidebar", () => {
    renderWithTranslation(<SideBar />)

    const btn = screen.getByTestId("toggle_btn")
    fireEvent.click(btn)

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
  })


});
