import React from "react";
import Container from "../../UI/Container";
import classes from "./CategoryProduct.module.scss";
import Picture from "../../UI/Picture/Picture";
import Text from "../../UI/Text/Text";
import Title from "../../UI/Title/Title";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

function CategoryProduct({ productData }) {
  const navigate = useNavigate();

  const {
    categoryImage,
    id,
    name,
    new: isNew,
    description,
    category,
    slug,
  } = productData;

  // function clickHandler(e) {
  //     navig
  // }

  /*   navigating to the product page entering the category path 
    and then id that we are searching for
  */
  const productLink = `/${category}/${slug}`;

  return (
    <div className={classes["category-product"]}>
      <Container className={classes.container}>
        <Picture sources={categoryImage} />

        <div className={classes.details}>
          {isNew && (
            <Text type="splitted" color="orange">
              New Product
            </Text>
          )}
          <Title size="h3" color="black">
            {name}
          </Title>
          <Text color="gray">{description}</Text>
          <Button type="orange" link={productLink}>
            See Product
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default CategoryProduct;
