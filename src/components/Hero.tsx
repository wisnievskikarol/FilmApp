import React from "react";
import Grid from "@mui/material/Grid";
import Poster from "../assets/movie-poster-jaws.jpg";
import Container from "@mui/material/Container";

type propsType = {
  data: Array<object>;
};

const Hero = (props: propsType) => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <h1>Siemanko</h1>
        </Grid>
        <Grid item xs={6}>
          <img style={{ width: "100%" }} src={Poster} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
