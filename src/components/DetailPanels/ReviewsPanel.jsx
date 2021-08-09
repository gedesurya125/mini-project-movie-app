import { Divider, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import ReviewForm from '../commons/ReviewForm';
import ReviewListContainer from './ReviewListContainer';
import { useDispatch } from 'react-redux';
import { getMovieReviewAction, getReviewByMovieIdAndUserTokenAction } from '../../redux/actions/moviesAction';

const useStyles = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(2, 0)
  }
}))
const ReviewsPanel = ({ movie_id }) => {
  const dispatch = useDispatch();
  const [trigerReload, setTrigerReload] = useState(false);
  const classes = useStyles();

  const handleTrigerReload = () => {
    setTrigerReload(state => !state);
  };

  useEffect(() => {
    dispatch(getMovieReviewAction(movie_id));
    dispatch(getReviewByMovieIdAndUserTokenAction(movie_id));
  },[dispatch, movie_id, trigerReload])
  return (
    <div>
      <ReviewForm id_movie={movie_id} trigerReload={handleTrigerReload} />
      <Divider className={classes.divider} />
      <ReviewListContainer />
    </div>
  )
}

export default ReviewsPanel


