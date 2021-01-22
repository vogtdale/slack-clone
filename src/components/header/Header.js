import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Home, Search } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Header.css";
import {auth} from '../../firebase'
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser)
  return (
    <div className="header">
      <div className="header-left">
        <Avatar src={user.photo}  onClick={() => auth.signOut()}/>
        <Link to="/">
          <Home className="header-homeIcon" />
       </Link>
      <AccessTime />
      
      </div>

      


      <div className="header-search">

        <Search />
        <input type="text" disabled placeholder="Search..." />
      </div>
      <div className="header-right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
