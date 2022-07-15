import React from "react";
import Container from "@mui/material/Container";
import MovieCart from "./MovieCover";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Popular = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1400, min: 940 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 940, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="popular">
      <Container maxWidth={"xl"}>
        <h2>Popular</h2>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={"mobile"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <MovieCart title={"szczenki"} rating={2.2} />

          <MovieCart title={"szczenki"} rating={2.2} />

          <MovieCart title={"szczenki"} rating={2.2} />

          <MovieCart title={"szczenki"} rating={2.2} />
        </Carousel>
      </Container>
    </div>
  );
};

export default Popular;
