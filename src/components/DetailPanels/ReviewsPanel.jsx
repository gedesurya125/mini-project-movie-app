import { Divider, makeStyles } from '@material-ui/core'
import React from 'react'
import Review from '../commons/Review'
import ReviewForm from '../commons/ReviewForm'

const useStyles = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(2, 0)
  }
}))
const ReviewsPanel = () => {
  const classes= useStyles()
  return (
    <div>
      <ReviewForm/>
      <Divider className={classes.divider}/>
      <Review/>
      <Review/>
      <Review/>
      <Review/>
      <Review/>
    </div>
  )
}

export default ReviewsPanel
