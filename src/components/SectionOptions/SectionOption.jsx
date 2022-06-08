import React from "react";
import classes from "./SectionOption.module.scss";
import Title from "../UI/Title/Title";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/images/shared/desktop/icon-arrow-right.svg";

function SectionOption({ name, path, image }) {
  const arrowImage = <img src={ArrowRight} alt="click" />;

  return (
    <li className={classes.option}>
      <Link to={path}>
        <img src={image} alt="Icon" />

        <Title size="h4" weight="w500">
          {name}
        </Title>

        <span>Shop {arrowImage}</span>
      </Link>
    </li>
  );
}

export default SectionOption;
