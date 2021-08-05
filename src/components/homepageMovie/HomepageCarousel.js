import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import "../../assets/styles/HomepageCarousel.css";

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    display: "flex",
  },
  imageContainer: {
    "& img": {
      width: "100%",
    },
  },
}));

function Item({ poster }) {
  const classes = useStyles();
  return (
    <div className={classes.paperRoot}>
      <div className={classes.imageContainer}>
        <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="" />
      </div>
    </div>
  );
}

export default function HomepageCarousel({ posters }) {
  const classes = useStyles();
  // const movies = useSelector((state) => state.movies.results);

  return (
    <Carousel className={classes.carouselContainer} animation="slide">
      {posters.map((poster, index) => (
        <div key={index}>
          <Item poster={poster} />
        </div>
      ))}
    </Carousel>
  );
}
