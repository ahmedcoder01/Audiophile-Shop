import React, { useState } from "react";
import Container from "../UI/Container";
import classes from "./Header.module.scss";
import Logo from "../../assets/images/shared/desktop/logo.svg";
import MenuIcon from "../../assets/images/shared/tablet/icon-hamburger.svg";
import CloseIcon from "../../assets/images/shared/tablet/icon-close-menu.svg";
import MenuPopup from "./MenuPopup";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import NotAuthActions from "./NotAuthActions";
import AuthActions from "./AuthActions";
import useUser from "../../hooks/useUser";

function Header() {
  const user = useUser();

  const [menuActive, setActiveMenu] = useState(false);

  const menuClickHandler = (e) => {
    setActiveMenu((prev) => !prev);
  };

  const navMenu = (
    <ul className={classes.menuList}>
      <MenuItem
        style={classes.menuItem}
        activeClass={classes.active}
        redirect="/"
      >
        Home
      </MenuItem>
      <MenuItem
        style={classes.menuItem}
        activeClass={classes.active}
        redirect="/headphones"
      >
        Headphones
      </MenuItem>
      <MenuItem
        style={classes.menuItem}
        activeClass={classes.active}
        redirect="/speakers"
      >
        Speakers
      </MenuItem>
      <MenuItem
        style={classes.menuItem}
        activeClass={classes.active}
        redirect="/earphones"
      >
        Earphones
      </MenuItem>
    </ul>
  );

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <button className={classes["menu-btn"]} onClick={menuClickHandler}>
          <img src={menuActive ? CloseIcon : MenuIcon} alt="Menu Button" />
        </button>

        <Link to="/" className={classes.logo}>
          <img src={Logo} alt="logo" />
        </Link>

        <nav>
          {menuActive ? <MenuPopup hide={setActiveMenu} /> : navMenu}

          {user ? <AuthActions /> : <NotAuthActions />}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
