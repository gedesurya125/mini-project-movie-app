import React, {useState, useEffect} from 'react'
import { Avatar, makeStyles, Typography, Grid } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import axios from 'axios'
import { sourceUrl } from '../../redux/Api/setupAPI'


const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(6)
  },
  avatarResponsive: {
    [theme.breakpoints.up('md')]: {
      height: theme.spacing(8),
      width: theme.spacing(8)
    }
  },
  inputForm: {
    marginBottom: theme.spacing(1)
  }

}))


const Review = ({review}) => {
  const [userImage, setUserImage] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    axios.get(`${sourceUrl}/auth/user/${review.reviewer.id}`)
    .then(res => setUserImage(`${sourceUrl}${res.data.data.image}`))
    .catch(err => console.log('ERROR GETTING REVIEWER IMAGE ', err))
  },[review.reviewer.id])
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2} sm={1}>
        <Avatar src={userImage} className={classes.avatarResponsive}>{review.reviewer.user_name[0].toUpperCase()}</Avatar>
      </Grid>
      <Grid item xs={10} sm={11} >
        <Typography>{review.reviewer.user_name}</Typography>
        <Rating value={review.rating} max={10} size="small" readOnly/>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item xs={12} md={11}>
        <Typography variant="h5">{review.headline}</Typography>
        <Typography variant="body1">{review.comment}</Typography>
      </Grid>
    </Grid>
  )
}

export default Review
