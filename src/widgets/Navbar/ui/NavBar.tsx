import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {

      const {t, i18n} = useTranslation()
 
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
    
      <div className={cls.links}>
        <AppLink to={"/"} className={cls.main} theme={AppLinkTheme.SECONDARY}>
          {t("Главная")}
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
            {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
