import { Typography, makeStyles } from '@material-ui/core'
import React from 'react';
import { formatDate } from '../../tools/dateReformat';
import DetailTitle from '../commons/DetailTitle';
import MovieInfoList from '../commons/MovieInfoList';

const useStyles = makeStyles(theme => ({
  synopsis: {
    margin: theme.spacing(2, 0, 8),
  },

  movieInfo: {
    margin: theme.spacing(2, 0, 0),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      '& .MuiListItem-root': {
        maxWidth: '50%'
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .MuiListItem-root': {
        maxWidth: '25%'
      }
    },
  },
  paddingTop6: {
    paddingTop: theme.spacing(8),
  },
  trailer: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    justifyContent: 'center'
  }
}));




const OverViewPanel = ({ movieDetails }) => {
  const classes = useStyles();
  const requiredList = [
    "releaseDate",
    "director",
    "song",
    "budget"
  ];

  const renderMovieInfo = requiredList.map((info, index) => {
    if (info === "releaseDate") {
      const formatedDate = formatDate(new Date(movieDetails.movieInfo[info]));
      const newFormatedArray = { ...movieDetails.movieInfo, releaseDate: formatedDate };
      return (
        <MovieInfoList infoKey={info} infoDetails={newFormatedArray} key={index} allKeys={requiredList} />
      )
    } else {
      return (
        <MovieInfoList infoKey={info} infoDetails={movieDetails.movieInfo} key={index} allKeys={requiredList} />
      )
    }
  })
  return (
    <>
      <DetailTitle>Synopsis</DetailTitle>
      <Typography className={classes.synopsis}>{movieDetails.synopsis}</Typography>

      <DetailTitle>Movie Info</DetailTitle>
      <div className={classes.movieInfo}>
        {renderMovieInfo}
      </div>

      <div className={classes.paddingTop6}>
        <DetailTitle>Trailer</DetailTitle>
        <div className={classes.trailer}>
          <iframe style={{ width: '80vw', height: '45.2vw' }} title="trailer"
            src={`https://www.youtube.com/embed/${movieDetails.trailer}`}>
          </iframe>
        </div>
      </div>


    </>
  )
}

export default OverViewPanel
