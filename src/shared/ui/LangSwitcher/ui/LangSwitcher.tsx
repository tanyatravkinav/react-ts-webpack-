import React from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";
const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      className={cls.switchLanguage}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
