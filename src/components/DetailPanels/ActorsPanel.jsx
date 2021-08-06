import React from 'react'
import ActorsPhotoCard from '../commons/ActorsPhotoCard'
import { makeStyles, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: theme.spacing(3),
    rowGap: theme.spacing(3)
  }
}))



//===============================================================
const ActorsPanel = () => {
  const classes = useStyles();
  const actorsList = useSelector(state => state.movieActors.data.data.actors);
  console.log('DATA ACTORNYA SEPERTI INI', actorsList);
  const renderActors = actorsList.map((actor) => (
    <ActorsPhotoCard key={actor._id} actor={actor} />
  ))
  return (
    <div>
      <Typography align="center" variant="h3" gutterBottom>Actors List</Typography>
      <div className={classes.root}>
        {renderActors}
      </div>
    </div>
  )
}

export default ActorsPanel
