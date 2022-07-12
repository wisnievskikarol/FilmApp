import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Button from "../components/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../assets/Logo.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <nav id="navbar">
        <ul className="menu">
          <li id="logo" title="Made by Johnny Stiwerson">
            <img src={Logo} />
          </li>
          <li id="trigram" title="CLICK ME!&#10I WORK WITHOUT JS :)">
            <div className="hamburger-menu">
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </li>
          <span id="responsive-menu">
            <ul className="menu">
              <li className="menu-option">
                <p>Home</p>
              </li>
              <li className="menu-option">
                <p>Products</p>
              </li>
              <li className="menu-option">
                <p>About us</p>
              </li>
              <li id="sign-in">
                <p>Sign in</p>
              </li>
              <li id="sign-up">
                <p>Sign up</p>
              </li>
            </ul>
          </span>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
