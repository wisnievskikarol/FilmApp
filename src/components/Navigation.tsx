import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import Logo from "../assets/Logo.png";
import HamburgerMenu from "../assets/hamburger-menu.png";
import CloseMenu from "../assets/close-menu.png";

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
          {menuToggle ? (
            <img
              className="hamburger-menu"
              src={HamburgerMenu}
              alt={"menu button"}
              onClick={() => setMenuToggle(!menuToggle)}
            />
          ) : (
            <img
              className="hamburger-menu"
              src={CloseMenu}
              alt={"menu button"}
              onClick={() => setMenuToggle(!menuToggle)}
            />
          )}
        </div>
        <div className={`toggle-menu ${menuToggle && "display-none"} `}>
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
