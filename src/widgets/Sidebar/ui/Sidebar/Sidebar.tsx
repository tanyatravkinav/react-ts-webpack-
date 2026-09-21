import React, { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/ui/LangSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const changeCollapse = () => {
    setCollapsed((val) => !val);
  };

  return (
    <div data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>

      <button onClick={changeCollapse} data-testid="toggle_btn">toggle</button>
    </div>
  );
};
