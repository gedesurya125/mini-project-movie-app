import React, { useState } from 'react'
import { Avatar, makeStyles, TextField, Typography, Grid } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  root: {

  },
  avatarResponsive:{
    [theme.breakpoints.up('md')]:{
      height: theme.spacing(8),
      width: theme.spacing(8)
    }
  },
  inputForm: {
    marginBottom: theme.spacing(1)
  }

}))

const ReviewForm = () => {
  const [state, setState] = useState({
    movie_id: '',
    user_id: '',
    headLine: '',
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
  return (
    <form>
      <Grid container className={classes.root}>
        <Grid item xs={2} sm={1}>
          <Avatar className={classes.avatarResponsive}>M</Avatar>
        </Grid>
        <Grid item xs={10} sm={11} >
          <Typography>User Name</Typography>
          <Rating
            name="simple-controlled"
            value={state.rating}
            size="small"
            max = {10}
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
            <TextField size="small" fullWidth label="Title" name="headLine" value={state.headLine} onChange={handleReviewChange} variant="outlined" color="primary" />
          </div>
          <div className={classes.inputForm}>
            <TextField multiline minRows={5} size="small" fullWidth label="Leave a Review" name="comment" value={state.comment} onChange={handleReviewChange} variant="outlined" color="primary" />
          </div>
        </Grid>

      </Grid>
    </form>
  )
}

export default ReviewForm
