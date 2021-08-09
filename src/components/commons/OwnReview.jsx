import React from 'react'
import { makeStyles, Typography, Grid, Button, Container } from '@material-ui/core'
import { Rating } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { openModalUpdateReviewAction } from '../../redux/actions/modalAction';
import EditReviewModal from '../EditReviewModal/EditReviewModal';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0)
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
  editButtonContainer:{
    textAlign: 'right',
    '& .MuiButton-root':{
      marginLeft: theme.spacing(1)
    }
  }

}))

const OwnReview = ({ userReview, id_movie }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log('ISI DARI USER REVIEW DI OWN REVIEW',userReview)
  const handleOpenModalUpdateReview = () => {
    dispatch(openModalUpdateReviewAction());
  }
  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12} >
        <Container>
          <Rating value={userReview.rating} max={10} size="small" readOnly />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Typography variant="h5">{userReview.headline}</Typography>
          <Typography variant="body1">{userReview.comment}</Typography>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container className={classes.editButtonContainer}>
          <Button onClick={handleOpenModalUpdateReview} variant="contained" color="primary">Edit</Button>
        </Container>
      </Grid>
    </Grid>
    <EditReviewModal id_movie={id_movie}/>
    </>
  )
}

const mapStateToProps = (state) => ({
  userReview: state.searchReview.data[0]
})
export default connect(mapStateToProps)(OwnReview)
