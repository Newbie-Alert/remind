import React from "react";
import * as Style from "./style";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import useResponsive from "../hooks/useResponsive";
import Footer from "../components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { pathname } = useLocation();
  const { isDesktop } = useResponsive();

  return (
    <Style.LayoutWrapper>
      {isDesktop ? <Sidebar /> : <Footer />}
      <Style.MainWrapper key={pathname}>{children}</Style.MainWrapper>
    </Style.LayoutWrapper>
  );
}
