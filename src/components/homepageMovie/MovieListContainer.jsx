import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
  Box,
  Container,
  Typography, 
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
 
  if(!movies) return(
    <Container>
      <Box height={300} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h5" align="center">Ooopss... Sorry, no movies for this category yet</Typography>
      </Box>
    </Container>
  )

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
