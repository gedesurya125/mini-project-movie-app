import React from 'react'
import { makeStyles, Typography, Grid, Button, Container } from '@material-ui/core'
import { Rating } from '@material-ui/lab'


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

const OwnReview = ({ userReview }) => {
  const classes = useStyles();
  return (
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
          <Button variant="contained" color="primary">Edit</Button>
          <Button variant="contained" color="secondary">Delete</Button>

        </Container>
      </Grid>
    </Grid>
  )
}

export default OwnReview
