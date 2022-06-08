import React from "react";
import HeadphonesIcon from "../../assets/images/shared/desktop/image-headphones.png";
import SpeakersIcon from "../../assets/images/shared/desktop/image-speakers.png";
import EarphonesIcon from "../../assets/images/shared/desktop/image-earphones.png";
import SectionOption from "./SectionOption";
import classes from "./SectionOptions.module.scss";
import Container from "../UI/Container";

const sections = [
  { name: "Headphones", path: "/headphones", image: HeadphonesIcon, id: 1 },
  { name: "Speakers", path: "/speakers", image: SpeakersIcon, id: 2 },
  { name: "Earphones", path: "/earphones", image: EarphonesIcon, id: 3 },
];

function SectionOptions() {
  return (
    <div className={classes["sections-options"]}>
      <Container className={classes.container}>
        <ul>
          {sections.map((section) => {
            const { name, path, image, id } = section;
            return (
              <SectionOption name={name} path={path} image={image} key={id} />
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default SectionOptions;
