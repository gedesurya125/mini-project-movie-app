import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
  Container, 
} from '@material-ui/core';
import MovieCard from './MovieCard';


const useStyles = makeStyles(theme => ({
  movieContainer:{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }
}))
const MovieDisplay = ({movies}) => {
  const classes = useStyles()
  const renderMovie = movies.map(movie => (
    <MovieCard key={movie._id} movie={movie}/>
  ))

  return (
    <Container className={classes.movieContainer}>
        {renderMovie}
    </Container>
  )
}

export default MovieDisplay
