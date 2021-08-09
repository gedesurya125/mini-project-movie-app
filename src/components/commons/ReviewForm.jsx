import React, { useState } from 'react'
import {
  Avatar
  , makeStyles
  , TextField
  , Typography
  , Grid
  , Button
  , Paper
  , CircularProgress
} from '@material-ui/core'
import { Rating } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieReviewAction, getReviewByMovieIdAndUserTokenAction, sendMovieReviewAction } from '../../redux/actions/moviesAction';

const useStyles = makeStyles(theme => ({
  root: {

  },
  avatarResponsive: {
    [theme.breakpoints.up('md')]: {
      height: theme.spacing(8),
      width: theme.spacing(8)
    }
  },
  inputForm: {
    marginBottom: theme.spacing(1)
  },
  reviewButton: {
    margin: theme.spacing(1, 0)
  },

  informationBoard: {
    padding: theme.spacing(2),
    '& .MuiTypography-root': {
      color: theme.palette.common.white,
      weight: theme.typography.fontWeightBold,
    }
  },
  notLogedIn: {
    background: theme.palette.primary.light,
  },

  reviewed: {
    background: theme.palette.success.main
  }


}))

const ReviewForm = ({ id_movie, trigerReload }) => {
  const user = useSelector(state => state.user.data);
  const reviewByUser = useSelector(state => state.searchReview);
  const movieReviews = useSelector(state => state.movieReviews)
  const dispatch = useDispatch();
  // console.log(user._id);
  // const [reviewed, setReviewed] = useState(false);
  const [state, setState] = useState({
    id_user: user._id,
    id_movie: id_movie,
    headline: '',
    comment: '',
    rating: 0,
  })

  const handleReviewChange = (e) => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  const classes = useStyles();

  const handleSendReview = () => {
    const dataToSend = {
      ...state,
      id_user: user._id
    }
    console.log(dataToSend);
    dispatch(sendMovieReviewAction(dataToSend));
    // dispatch(getReviewByMovieIdAndUserTokenAction(id_movie));
    trigerReload();
    dispatch(getReviewByMovieIdAndUserTokenAction(id_movie));
    dispatch(getMovieReviewAction(id_movie))
    // setReviewed(true);
    setState(state => ({
      ...state,
      headline: '',
      comment: '',
      rating: 0,
    }))
  };


  // useEffect(() => {
    
    
  // },[dispatch, id_movie, state])

  if (Boolean(reviewByUser.data.length)) return (
    <Paper elevation={2} className={`${classes.informationBoard} ${classes.reviewed}`}>
      <Typography variant="body1" align="center"> You had reviewed this movie</Typography>
    </Paper>
  );

  if (!user._id) return (
    <Paper elevation={2} className={`${classes.informationBoard} ${classes.notLogedIn}`}>
      <Typography variant="body1" align="center"> PLEASE LOGIN FIRST TO CREATE A REVIEW </Typography>
    </Paper>
  );

  return (
    <form>
      <Grid container className={classes.root}>
        <Grid item xs={2} sm={1}>
          <Avatar className={classes.avatarResponsive} src={user.image} alt={user.username[0].toUpperCase()} />
        </Grid>
        <Grid item xs={10} sm={11} >
          <Typography>{user.fullname}</Typography>
          <Rating
            name="simple-controlled"
            value={state.rating}
            size="small"
            max={10}
            onChange={(event, newValue) => {
              setState(state => ({
                ...state,
                rating: newValue
              }));
            }}
          />
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={11}>
          <div className={classes.inputForm}>
            <TextField size="small" fullWidth label="Title" name="headline" value={state.headline} onChange={handleReviewChange} variant="outlined" color="primary" />
          </div>
          <div className={classes.inputForm}>
            <TextField multiline minRows={5} size="small" fullWidth label="Leave a Review" name="comment" value={state.comment} onChange={handleReviewChange} variant="outlined" color="primary" />
            <Button startIcon={movieReviews.loading || reviewByUser.loading? <CircularProgress size={20} color="secondary"/> : null} onClick={handleSendReview} className={classes.reviewButton} variant="contained" color="primary">Send Review</Button>
          </div>
        </Grid>

      </Grid>
    </form>
  )
}

export default ReviewForm
