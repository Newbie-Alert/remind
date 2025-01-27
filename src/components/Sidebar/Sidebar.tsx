import React from "react";
import * as Style from "./style";
import SidebarItem from "../SidebarItem/SidebarItem";
import { HomeIcon, List } from "lucide-react";

export default function Sidebar() {
  return (
    <Style.SidebarWrapper>
      Sidebar
      <SidebarItem icon={<HomeIcon />} title="Home" href="/" />
      <SidebarItem icon={<List />} title="List" href="/list" />
    </Style.SidebarWrapper>
  );
}
