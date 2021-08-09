import React from 'react';
import Review from '../commons/Review';
import { useSelector } from 'react-redux';

const ReviewListContainer = () => {
  
  const movieReviews = useSelector(state => state.movieReviews);
  const reviewList = movieReviews.data.allData;
  const renderReviews = reviewList.map(review => (<Review key={review.id_review} review={review} />));
  
  return (
    <>
      {reviewList.length ? renderReviews : null}
    </>
  )
}

export default ReviewListContainer
