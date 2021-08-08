import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { makeStyles} from '@material-ui/core'
import { sourceUrl } from '../../redux/Api/setupAPI';

const useStyles = makeStyles(theme => ({
  root:{
    position: 'relative'
  },
  carouselContainer: {
    // marginTop: theme.spacing(2)
    maxHeight: '92vh',
  },
  paperRoot: {
    // display: 'flex',
    // padding: theme.spacing(1)
    // height: theme.spacing(200)
  },
  imageContainer: {
    // flexShrink: '1',
    position: 'relative',
    '& img': {
      width: '100%',
    }
  },
  indicatorContainer: {
    position: 'absolute',
    zIndex: '10',
    bottom: '20px'
  },
  carouselText: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100vw',
    
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
        <img src={sourceUrl+movie.poster} alt="..." />
      </div>

    </div>
  )
}

// MAIN COMPONENT HOMEPAGE CAROUSEL
export default function HomepageCarousel({ topMovies }) {
  const classes = useStyles()
  // const topMovies = useSelector(state => state.topMovies.data.data);
  // console.log('TOP MOVIES FROM IMAGE CAROUSEL', topMovies);

  const renderitemCarousel = topMovies?.map(movie => (
    <ItemCarousel key={movie._id} movie={movie} />
  ))

  return (
    <div className={classes.root}>
      <Carousel
        className={classes.carouselContainer}
        animation="slide"
        indicatorContainerProps={{ className: classes.indicatorContainer }}
        indicatorIconButtonProps={{ className: classes.indicator }}
      >
        {renderitemCarousel}
      </Carousel >
    </div>
  )
}
