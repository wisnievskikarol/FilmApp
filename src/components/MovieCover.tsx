import React, { useState } from "react";
import Poster from "../assets/movie-poster-jaws.jpg";
import Star from "../assets/star.png";

interface Props {
  title: string;
  rating: number;
}

function changeBackground(e: any) {
  e.preventDefault();
  console.log("pomidor");
}

const MovieCart = (props: Props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="poster-cnt"
    >
      <img src={Poster} />
      <div className={`poster-information-cnt ${isShown && "display-flex"}`}>
        {/*<div className={`poster-information-cnt display-flex`}>*/}
        <div className="poster-information">
          <p className="movie-cover-title">{props.title}</p>
          <div className="movie-cover-rating-cnt">
            <img src={Star} />
            <p className="movie-cover-rating">{props.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCart;
