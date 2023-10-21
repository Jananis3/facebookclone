import React from "react";
import "./Sidebar.css";
import './App.jsx';

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
        title="Janani S"
        src=""
      />
      <SidebarRow
        title="Covid 19 Information Center"
        Icon={LocalHospitalizationIcon}
      />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" Icon={ChatIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="Marketplace" Icon={ExpandMoreOutlined} />
    </div>
  );
}

export default Sidebar;