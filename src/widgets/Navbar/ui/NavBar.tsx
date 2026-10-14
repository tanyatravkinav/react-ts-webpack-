import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";

import { useTranslation } from "react-i18next";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {


  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>/</div>
    </div>
  );
};
