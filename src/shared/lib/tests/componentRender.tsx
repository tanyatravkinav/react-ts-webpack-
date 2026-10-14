import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/I18nTests";
import { BrowserRouter } from "react-router-dom";

export function componentRender(component: ReactNode) {
  return render(
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
    </BrowserRouter>,
  );
}
