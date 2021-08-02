import React from 'react'
import { Avatar, makeStyles, Typography, Grid } from '@material-ui/core'
import { Rating } from '@material-ui/lab'


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
const Review = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2} sm={1}>
        <Avatar className={classes.avatarResponsive}>M</Avatar>
      </Grid>
      <Grid item xs={10} sm={11} >
        <Typography>User Name</Typography>
        <Rating value={6} max={10} size="small" readOnly/>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item xs={12} md={11}>
        <Typography variant="h5">Headline</Typography>
        <Typography variant="body1">Proident fugiat sunt sit nisi deserunt in consequat. Ea non mollit id qui magna tempor ut cupidatat aliqua nulla consequat qui adipisicing ad. Culpa commodo elit incididunt dolor ut. Aliquip cupidatat aute consectetur officia elit qui pariatur aliqua. Proident incididunt nostrud sit pariatur pariatur anim.</Typography>
      </Grid>
    </Grid>
  )
}

export default Review
