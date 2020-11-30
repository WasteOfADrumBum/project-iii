import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// FONT AWESOME ICONS v5
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faGithub);

const data = [
  {
    image: "assets/images/joshua-avatar.png",
    alt: "Joshua",
    caption: "Joshua M. Small",
    description: "Full Stack Developer",
    github: "https://github.com/WasteOfADrumBum",
    linkedin: "https://www.linkedin.com/in/joshuamsmall",
  },
  {
    image: "assets/images/max-avatar.png",
    alt: "Max",
    caption: "Max Gerringer",
    description: "Front End Developer",
    github: "https://github.com/maxgerringer",
    linkedin: "https://www.linkedin.com/in/max-gerringer-9415b284",
  },
  {
    image: "assets/images/jim-avatar.png",
    alt: "Jim",
    caption: "Jim Faulkner",
    description: "Back End Developer",
    github: "https://github.com/jhf1203",
    linkedin: "https://www.linkedin.com/in/jim-faulkner-13476534",
  },
  {
    image: "assets/images/mark-avatar.png",
    alt: "Mark",
    caption: "Mark Speer",
    description: "Back End Developer",
    github: "https://github.com/mark-speer",
    linkedin: "https://www.linkedin.com/in/mark-speer",
  },
  {
    image: "assets/images/arlene-avatar.png",
    alt: "Arlene",
    caption: "Arlene Rodriguez",
    description: "Back End Developer",
    github: "https://github.com/arodrigu1",
    linkedin: "https://www.linkedin.com/in/arlene-rodriguez-17a22254",
  },
];

const DataCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item key={i + "-slide"}>
            <img className="d-block w-100" src={slide.image} alt={slide.alt} />
            <Carousel.Caption>
              <h5>{slide.caption}</h5>
              <p>{slide.description}</p>
              <a href={slide.github}>
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ color: "black" }}
                />
              </a>
              <a href={slide.linkedin}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ color: "black" }}
                />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

DataCarousel.defaultProps = {
  data
}

export default DataCarousel;
