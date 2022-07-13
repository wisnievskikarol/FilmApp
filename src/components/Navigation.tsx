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
import HamburgerMenu from "../assets/hamburger-menu.png";
import { useState } from "react";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navigation = () => {
  const [menuToggle, setMenuToggle] = useState(false);

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
    <nav className="navbar">
      <Container maxWidth="xl">
        <div className="menu-container-lg">
          <div className="menu-left-container">
            <img className="logo" src={Logo} alt={"logo"} />

            <ul className="menu-left">
              <li className="menu-option">
                <p>Home</p>
              </li>
              <li className="menu-option">
                <p>Products</p>
              </li>
              <li className="menu-option">
                <p>About us</p>
              </li>
            </ul>
          </div>
          <div className="menu-right-container">
            <ul>
              <li id="sign-in">
                <p>Log in</p>
              </li>
              <li id="sign-up">
                <p>Register</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-container-sm">
          <img className="logo" src={Logo} alt={"logo"} />
          <img
            className="hamburger-menu"
            src={HamburgerMenu}
            alt={"menu button"}
          />
        </div>
        <div className="toggle-menu ">
          <ul>
            <li>
              <p>Popular</p>
            </li>
            <li>
              <p>Whats New!</p>
            </li>
            <li>
              <p>Films</p>
            </li>
            <li>
              <p>Log in</p>
            </li>
            <li>
              <p>Register</p>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
export default Navigation;
