import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import RedPlayButton from "../assets/red-play-button.png";
import RightArrow from "../assets/right-arrow.png";
import YouTube, { YouTubeProps } from "react-youtube";
type propsType = {
  data: Array<object>;
};

const Hero = (props: propsType) => {
  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      loop: 1,
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
    },
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    // <Container maxWidth="xl">
    <>
      <div className="hero">
        <Container maxWidth="xl">
          <Grid container spacing={0}>
            <Grid className="left-hero-section" item xs={6}>
              <div className="left-hero-section-cnt">
                <div className="hero-whats-new-cnt">
                  <div className="hero-whats-new-line" />
                  <p>What’s new</p>
                </div>
                <h1>sad</h1>
                <div className="hero-description">
                  <p>
                    A former soldier of special forces is subjected to a
                    dangerous experiment. Soon he releases his alter ego and
                    begins the hunt for the man who nearly destroyed his life.
                  </p>
                  <div className="hero-read-more">
                    <p>Read more</p>
                    <img src={RightArrow} />
                  </div>
                  <div className="hero-play-now">
                    <img src={RedPlayButton} />
                    <p>PLAY NOW</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              {/*<img style={{ width: "100%" }} src={Poster} />*/}
            </Grid>
          </Grid>
        </Container>
        {/*<img style={{ width: "100%" }} src={Poster} />*/}
        <YouTube className="video-player" videoId="PCQs3vSJ6xA" opts={opts} />
      </div>
    </>
  );
};

export default Hero;
