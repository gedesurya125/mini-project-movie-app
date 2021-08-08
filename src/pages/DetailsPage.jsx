import React, { useEffect } from 'react';
import { alpha, Button, Container, makeStyles, Typography } from '@material-ui/core';
import { Rating, Skeleton } from '@material-ui/lab';
import DetailsTab from '../components/DetailsTab';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMovieActorsAction
  , getMovieDetailsAction
  // , getMovieReviewAction
} from '../redux/actions/moviesAction';
import { sourceUrl } from '../redux/Api/setupAPI';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(state => state.movieDetails.data);
  const useStyles = makeStyles(theme => ({
    posterContainer: {
      // height: '91vh',
      backgroundImage: `url(${sourceUrl + movieDetails.poster})`,
      backgroundSize: 'cover',
      // backgroundAttachment: 'fixed',
      '& h3.MuiTypography-root, h5.MuiTypography-root  ': {
        fontWeight: 'bold'
      },
      '& .MuiTypography-root': {
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
          textAlign: 'left'
        },
        color: theme.palette.common.white,
      }

    },
    detailsContainer: {
      padding: theme.spacing(5, 0),
      background: alpha(theme.palette.common.black, 0.5),
      height: '100%'
    },
    rating: {

      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: theme.spacing(1, 0),
      '& .MuiRating-root': {
        marginRight: theme.spacing(1)
      },
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'flex-start'
      },
    },

    briefDescription: {
      maxWidth: '100%',
      [theme.breakpoints.up('sm')]: {
        maxWidth: '60%',
      },
      margin: theme.spacing(8, 0)
    },


    detailsAction: {
      '& .MuiButton-root': {
        display: 'block',
        margin: theme.spacing(2, 'auto'),
        [theme.breakpoints.up('sm')]: {
          display: 'inline-block',
          marginRight: theme.spacing(2),
        }
      },
    },

    buttonSaveWatch: {
      color: 'white',
      borderColor: 'white',
    }

  }))

  const { movie_id } = useParams()


  // console.log('PARAMETER DARI DETAIL PAGE', movie_id);

  const classes = useStyles()

  useEffect(() => {
    dispatch(getMovieDetailsAction(movie_id, () => { }));
    dispatch(getMovieActorsAction(movie_id));
  }, [dispatch, movie_id])

  if (!movieDetails.title) return (
    <div>
      <Skeleton width="100%" height="100vh" variant="rect" />
    </div>
  );
  return (
    <div>
      {/* POSTER TOP */}
      <div className={classes.posterContainer}>
        <div className={classes.detailsContainer}>
          <Container>
            <Typography variant="h3" component="h3">{movieDetails?.title}</Typography>
            <div className={classes.rating}>
              <Rating name="half-rating-read" value={movieDetails?.movieInfo?.rating} max={10} size="large" precision={0.1} readOnly />
              <Typography variant="h5">({movieDetails?.movieInfo.rating}) {movieDetails?.movieInfo.total_review} Reviews</Typography>
            </div>
            <Typography className={classes.briefDescription} variant="body1">
              {movieDetails?.description}
            </Typography>
            <div className={classes.detailsAction}>
              <a href={`https://www.youtube.com/watch?v=${movieDetails?.trailer}`} rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                <Button variant="contained" size="large" color="primary">
                  Watch Trailer
                </Button>
              </a>
              <Button variant="outlined" size="large" className={classes.buttonSaveWatch}>Add To Watchlist</Button>
            </div>
          </Container>
        </div>
      </div>


      <Container>
        <DetailsTab movieDetails={movieDetails} movie_id={movie_id} /> {/* Setelah Ada API props movieDetails dihapus */}
      </Container>
    </div>
  )
}

export default DetailsPage
