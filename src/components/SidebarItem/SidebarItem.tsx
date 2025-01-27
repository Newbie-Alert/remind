import React from "react";
import * as Style from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";

type Props = {
  title: string;
  href: string;
  icon: JSX.Element;
};

/**
 *
 * @param title - 메뉴 이름
 * @returns href - ex). /home, /detail
 */
export default function SidebarItem({ title, href, icon }: Props) {
  const { isDesktop } = useResponsive();
  const { pathname } = useLocation();
  const navi = useNavigate();

  const handleRoute = () => {
    navi(href);
  };

  return (
    <Style.SidebarItem $isCurrentPage={pathname === href} onClick={handleRoute}>
      {isDesktop ? title : icon}
    </Style.SidebarItem>
  );
}
