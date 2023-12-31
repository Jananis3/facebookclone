import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
//import './Navbar.css'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

export default class NavbarComp extends Component {
render() {
return (
<Navbar variant={"dark"} expand="sm">
<Nav
className="mr-auto my-2 my-lg-0"
style={{ maxHeight: '100px', float : 'left' }}
navbarScroll
>
<div className="header">
<div className="header__left">
<img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/
51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
alt=""
/>
<div className="header__input">
<SearchIcon />
<input type="text" placeholder="Search Facebook" />
</div>
</div>
<div className="header__center">
<div className="header__option header__option--active">
            <Link to = "/Home">
          <HomeIcon fontsize="large" /></Link>
        </div>

        <div className="header__option">
        <Link to="./Vedio">

          <SubscriptionsOutlinedIcon fontsize="large" /></Link>
        </div>

        <div className="header__option">
        <Link to="./Store">

          <StorefrontOutlinedIcon fontsize="large" /></Link>
        </div>


        <div className="header__option">
        <Link to="./Friends">
        <SupervisedUserCircleIcon fontsize="large" /></Link>
        </div>
        
</div>
<div className="header__right">
<div className="header__info">
<Avatar />
<h4>Janani</h4>
</div>
<IconButton>
<AddIcon />
</IconButton>
<IconButton>
<ForumIcon />
</IconButton>
<IconButton>
<NotificationsActiveIcon />
</IconButton>
<IconButton>
<ExpandMoreIcon />
</IconButton>
</div>
</div>
</Nav>
</Navbar>
)
}}


