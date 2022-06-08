import React from "react";
import classes from "./Footer.module.scss";
import Container from "../UI/Container";
import Logo from "../../assets/images/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import Text from "../UI/Text/Text";
import FbIcon from "../../assets/images/shared/desktop/icon-facebook.svg";
import TwitterIcon from "../../assets/images/shared/desktop/icon-twitter.svg";
import IgIcon from "../../assets/images/shared/desktop/icon-instagram.svg";

function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.footer__container}>
        <div className={classes.footer__container__row}>
          <div>
            <img src={Logo} alt="Audiophile" />
          </div>
          <ul className={classes["footer__container__row__pages-links"]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/headphones">Headphones</Link>
            </li>
            <li>
              <Link to="/speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/earphones">Earphones</Link>
            </li>
          </ul>
        </div>

        <div className={classes.footer__container__row}>
          <Text>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Text>

          <ul className={classes.footer__container__row__social}>
            <li>
              <img src={FbIcon} alt="fb" />
            </li>
            <li>
              <img src={TwitterIcon} alt="twitter" />
            </li>
            <li>
              <img src={IgIcon} alt="instagram" />
            </li>
          </ul>
        </div>

        <Text>Copyright 2021. All Rights Reserved</Text>
      </Container>
    </div>
  );
}

export default Footer;
