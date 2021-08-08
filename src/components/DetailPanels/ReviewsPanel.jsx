import { Divider, makeStyles } from '@material-ui/core';
import React, {useEffect} from 'react';
import Review from '../commons/Review';
import ReviewForm from '../commons/ReviewForm';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieReviewAction } from '../../redux/actions/moviesAction';

const useStyles = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(2, 0)
  }
}))
const ReviewsPanel = ({movie_id}) => {
  const dispatch = useDispatch();
  const movieReviews = useSelector(state => state.movieReviews);
  const reviewList = movieReviews.data.allData;
  // console.log(reviewList);
  const classes= useStyles()

  const renderReviews = reviewList.map(review => (<Review key={review.id_review} review={review}/>));
  // console.log('CONSOLE FROM REVIEW PANEL',reviewList);
  useEffect(() => {
    dispatch(getMovieReviewAction(movie_id));
  },[dispatch, movie_id])
  return (
    <div>
      <ReviewForm id_movie = {movie_id} isReviewed = {movieReviews.reviewed}/>
      <Divider className={classes.divider}/>
      {/* <Review/>
      <Review/>
      <Review/>
      <Review/>
      <Review/> */}
      {reviewList.length && renderReviews}
    </div>
  )
}

export default ReviewsPanel
