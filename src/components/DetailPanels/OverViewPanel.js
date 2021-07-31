import { Typography, makeStyles } from '@material-ui/core'
import React from 'react';
import DetailTitle from '../commons/DetailTitle';
import MovieInfoList from '../commons/MovieInfoList';

const useStyles = makeStyles(theme => ({
  synopsis: {
    margin: theme.spacing(2, 0, 4),
  },

  movieInfo:{
    margin: theme.spacing(2, 0, 4),
    [theme.breakpoints.up('sm')]:{
      display: 'flex',
      flexWrap: 'wrap',
      '& .MuiListItem-root':{
        maxWidth: '50%'
      }
    },
    [theme.breakpoints.up('md')]:{
      '& .MuiListItem-root':{
        maxWidth: '25%'
      }
    }
  }
}));

const OverViewPanel = ({ movieDetails }) => {
  const classes = useStyles();
  const movie_info = Object.keys(movieDetails.movie_info);
  // console.log(movie_info);


  const renderMovieInfo = movie_info.map((info, index) => (
    <MovieInfoList infoKey={info} infoDetails={movieDetails.movie_info} key={index}  allKeys={movie_info}/>
  ))
  return (
    <>
      <DetailTitle>Synopsis</DetailTitle>
      <Typography className={classes.synopsis}>{movieDetails.synopsis}</Typography>
      <DetailTitle>Movie Info</DetailTitle>
      <div className={classes.movieInfo}>
        {renderMovieInfo}
      </div>
    </>
  )
}

export default OverViewPanel
