import React from 'react';
import Review from '../commons/Review';
import { connect } from 'react-redux';

const ReviewListContainer = ({movieReviews}) => {
  
  // const movieReviews = useSelector(state => state.movieReviews);
  const reviewList = movieReviews.data.allData;
  const renderReviews = reviewList.map(review => (<Review key={review.id_review} review={review} />));
  
  return (
    <>
      {reviewList.length ? renderReviews : null}
    </>
  )
}

const mapStateToProps = (state) => ({
  movieReviews: state.movieReviews
})

export default connect(mapStateToProps)(ReviewListContainer);
