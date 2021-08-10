import React, { useState } from 'react';
import DefaultModal from '../commons/DefaultModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalUpdateReviewAction } from '../../redux/actions/modalAction';
import { Divider, TextField, Typography, makeStyles, Button, Box, CircularProgress, Paper } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { getMovieDetailsAction, getMovieReviewAction, getReviewByMovieIdAndUserTokenAction, updateMovieReviewAction } from '../../redux/actions/moviesAction';
import { Warning } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  statusUpdate:{
    display: 'flex',
    background: theme.palette.error.main,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    '& .MuiSvgIcon-root':{
      marginRight: theme.spacing(2)
    }
  },
  ratingContainer:{
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1, 1, 1, 0),
    '& .MuiTypography-root':{
      marginRight: theme.spacing(1)
    }
  },
  inputUpdate: {
    marginBottom: theme.spacing(1)
  },
  inputContainer: {
    padding: theme.spacing(1, 0),
  },
  button: {
    margin: theme.spacing(0, 0.5)
  }
}))

const EditReviewModal = ({id_movie}) => {
  const classes = useStyles();
  const [newReview, setNewReview] = useState({
    headline: '',
    comment: '',
    rating: 0,
  })
  const dispatch = useDispatch()
  const { modalUpdateReview } = useSelector(state => state.modals);
  const searchReview = useSelector(state => state.searchReview);
  const {loading, failedUpdate} = useSelector(state => state.movieReviews);
  const onCloseModal = () => {
    dispatch(closeModalUpdateReviewAction());
  }
  const handleInputChange = (e) => {
    setNewReview(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmitUpdate = () => {
    const dataToSend = {
      ...newReview
    }
    const reviewId = searchReview.data[0]._id;
    // console.log('DATA YANG AKAN DIKIRIM ADALAH', dataToSend, reviewId);
    dispatch(updateMovieReviewAction(reviewId, dataToSend, () => {
      dispatch(getMovieReviewAction(id_movie, () => {
        dispatch(getReviewByMovieIdAndUserTokenAction(id_movie, () => {
          dispatch(getMovieDetailsAction(id_movie))
        }))
      }))
    }));

  }
  return (
    <DefaultModal openModal={modalUpdateReview} onCloseAction={onCloseModal}>
      <Typography variant="h5" gutterBottom align="center">Update Review</Typography>
      {failedUpdate ?
      <Paper className={classes.statusUpdate}>
        <Warning/>
        <Typography variant="body1">Failed Update Review</Typography>
      </Paper> 
      :null
      }
      <Divider />
      <div className={classes.inputContainer}>
        <div className={classes.ratingContainer}>
        <Typography>Rating :</Typography>
        <Rating
          name="rating"
          className={classes.inputUpdate}
          value={newReview.rating}
          size="small"
          max={10}
          onChange={(event, newValue) => {
            setNewReview(state => ({
              ...state,
              rating: newValue
            }));
          }}
        />
        </div>

        <TextField
          value={newReview.headline}
          onChange={handleInputChange}
          variant="outlined"
          label="Title"
          name="headline"
          fullWidth
          className={classes.inputUpdate}
        />
        <TextField
          value={newReview.comment}
          multiline
          minRows={5}
          onChange={handleInputChange}
          variant="outlined"
          label="comment"
          name="comment"
          fullWidth
          className={classes.inputUpdate}
        />
        <Box display="flex" justifyContent="center">
          <Button startIcon={loading ? <CircularProgress size={15} color="secondary"/> : null} className={classes.button} onClick={handleSubmitUpdate} variant="contained" color="primary" size="small">Submit</Button>
          <Button className={classes.button} onClick={onCloseModal} variant="contained" color="secondary" size="small">Cancle</Button>
        </Box>

      </div>
    </DefaultModal>
  )
}

export default EditReviewModal
