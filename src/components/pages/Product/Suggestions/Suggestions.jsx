import React from "react";
import SuggestionProduct from "../../../ProductDesigns/SuggestionProduct/SuggestionProduct";
import classes from "./Suggestions.module.scss";
import Container from "../../../UI/Container";
import Title from "../../../UI/Title/Title";

function Suggestions({ suggestions }) {
  return (
    <div className={classes.suggestions}>
      <Container className={classes.suggestions__container}>
        <Title size="h2" weight="w700" className={classes.title}>
          YOU MAY ALSO LIKE
        </Title>

        <div className={classes["sugesstions__products"]}>
          {suggestions.map((suggestion) => (
            <SuggestionProduct key={suggestion.slug} productData={suggestion} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Suggestions;
