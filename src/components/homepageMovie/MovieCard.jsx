import React from 'react'
import { makeStyles } from '@material-ui/styles';
import {
  CardActionArea,
  Card, CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMovieDetailsAction } from '../../redux/actions/moviesAction';


const useStyles = makeStyles(theme => ({
  movieCard: {
    width: '100%',
    margin: '4% 0',
    '& .MuiCardMedia-root':{
      height: '25em'
    },

    [theme.breakpoints.up('sm')]: {
      width: '46%',
      margin: '2%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '18%',
      margin: '1%',
      '& .MuiCardMedia-root':{
        height: '23em'
      },
    }
  }
}))



const MovieCard = ({ movie }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();


  const onCardClick = () =>{
    console.log('RESPONSE DARI CARD', movie._id);
    dispatch(getMovieDetailsAction(movie._id, ()=>{
      history.push(`/details/${movie._id}`);
    }))

  }
  return (
    <Card className={classes.movieCard}>
      <CardActionArea onClick={onCardClick}>
        <CardMedia
          component="img"
          alt="movie-thumbnail"
          // height="200"
          image={movie.thumbnail}
          title={movie.title}
        />
      </CardActionArea>
      <CardContent>
        <Typography align="center" variant="h6">{movie.title}</Typography>
      </CardContent>
    </Card>
  )
}

export default MovieCard
