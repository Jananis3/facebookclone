import React from "react";
import "./Slidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalizationIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Janani"
        src="dp0.png"
      />
      <SidebarRow
        title="Covid 19 "
        Icon={LocalHospitalizationIcon}
      />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Chat" Icon={ChatIcon} />
      <SidebarRow title="Requests" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" Icon={ChatIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow title="Food" Icon={StorefrontIcon} />
      <SidebarRow title="Shopping" Icon={StorefrontIcon} />
      <SidebarRow title="More" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="Pictures" Icon={ExpandMoreOutlined} />
    </div>
  );
}

export default Sidebar;
