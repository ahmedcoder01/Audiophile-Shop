import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container";
import classes from "./GoBack.module.scss";

function GoBack() {
  const navigate = useNavigate();

  function clickHandler(e) {
    navigate(-1);
  }

  return (
    <Container>
      <button className={classes.goback} onClick={clickHandler}>
        Go Back
      </button>
    </Container>
  );
}

export default GoBack;
