import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  carouselContainer: {
    // marginTop: theme.spacing(2)
    // height: '90vh'
  },
  paperRoot: {
    // display: 'flex',
    // padding: theme.spacing(1)
    // height: theme.spacing(200)
  },
  imageContainer: {
    // flexShrink: '1',
    '& img': {
      width: '100%'
    }
  },
  indicatorContainer: {
    position: 'absolute',
    zIndex: '10',
    bottom: '20px'
  }
}))


// ITEM COMPONENT TO BE SHOWN
function ItemCarousel({ movie }) {
  const classes = useStyles()
  return (
    <div className={classes.paperRoot}>

      {/* {movies.map(movie => (
        <div className={classes.imageContainer}>
          <img src={`${process.env.REACT_APP_TMDB_MOVIE_IMAGE}/${movie.poster_path}`} alt="" />
        </div>
      ))} */}
      <div className={classes.imageContainer}>
        <img src={movie.poster} alt="..." />
      </div>

    </div>
  )
}

// MAIN COMPONENT HOMEPAGE CAROUSEL
export default function HomepageCarousel({topMovies}) {
  const classes = useStyles()
  // const topMovies = useSelector(state => state.topMovies.data.data);
  // console.log('TOP MOVIES FROM IMAGE CAROUSEL', topMovies);

  const renderitemCarousel = topMovies?.map(movie => (
    <ItemCarousel key={movie._id} movie={movie} />
  ))

  return (
    <Carousel
      className={classes.carouselContainer} 
      animation="slide"
      indicatorContainerProps={{ className: classes.indicatorContainer }}
      indicatorIconButtonProps={{ className: classes.indicator }}
    >
      {renderitemCarousel}

    </Carousel>
  )
}
