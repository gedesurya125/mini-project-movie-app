import React from 'react';
import { alpha, Button, Container, makeStyles, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import DetailsTab from '../components/DetailsTab';
//MOCK DATA MOVIES =============================================
const movieDetailsMock = {
  "id": "379686",
  "title": "Space Jam: A New Legacy",
  "category": "Anime",
  "genre": [
    "action",
    "triller",
    "comedy",
    "horrom"
  ],
  "thumbnail": "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
  "poster": "https://image.tmdb.org/t/p/original/8s4h9friP6Ci3adRGahHARVd76E.jpg",
  "brief_description": "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
  "synopsis": "Commodo mollit ex ipsum nulla. Ut occaecat sunt ea deserunt et aute occaecat ad nostrud. Fugiat labore sit incididunt dolore magna ea exercitation sint non do et. Lorem duis cupidatat laboris irure occaecat laboris duis commodo ipsum adipisicing.",
  "movie_info": {
    "release_date": "2021-07-08",
    "director": "John Doe Featured",
    "song": "Pegasus fantasi",
    "budget": "200 million USD"
  },
  "average_rating": 7.8,
  "total_review": 1263,
  "trailler": "5qap5aO4i9A"
}
//==============================================================

const useStyles = makeStyles(theme => ({
  posterContainer: {
    // height: '91vh',
    backgroundImage: `url(${movieDetailsMock.poster})`,
    backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    '& h3.MuiTypography-root, h5.MuiTypography-root  ': {
      fontWeight: 'bold'
    },
    '& .MuiTypography-root': {
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        textAlign: 'left'
      },
      color: theme.palette.common.white,
    }

  },
  detailsContainer: {
    padding: theme.spacing(5, 0),
    background: alpha(theme.palette.common.black, 0.5),
    height: '100%'
  },
  rating: {

    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: theme.spacing(1, 0),
    '& .MuiRating-root': {
      marginRight: theme.spacing(1)
    },
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]:{
      justifyContent: 'flex-start'
    },
  },

  briefDescription: {
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]:{
      maxWidth: '60%',
    },
    margin: theme.spacing(8, 0)
  },


  detailsAction:{
    '& .MuiButton-root':{
      display: 'block',
      margin: theme.spacing(2, 'auto'),
      [theme.breakpoints.up('sm')]:{
        display: 'inline-block',
        marginRight: theme.spacing(2),
      }
    },
  },

  buttonSaveWatch: {
    color: 'white',
    borderColor: 'white',
    // marginLeft: theme.spacing(2)
  }

}))


const DetailsPage = () => {
  const classes = useStyles()
  return (
    <div>
      {/* POSTER TOP */}
      <div className={classes.posterContainer}>
        <div className={classes.detailsContainer}>
          <Container>
            <Typography variant="h3" component="h3">{movieDetailsMock.title}</Typography>
            <div className={classes.rating}>
              <Rating name="half-rating-read" defaultValue={movieDetailsMock.average_rating} max={10} size="large" precision={0.1} readOnly />
              <Typography variant="h5">{movieDetailsMock.total_review} Reviews</Typography>
            </div>
            <Typography className={classes.briefDescription} variant="body1">
              {movieDetailsMock.brief_description}
            </Typography>
            <div className={classes.detailsAction}>
              <Button variant="contained" size="large" color="primary">Watch Trailer</Button>
              <Button variant="outlined" size="large" className={classes.buttonSaveWatch}>Add To Watchlist</Button>
            </div>
          </Container>
        </div>
      </div>


      <Container>
        <DetailsTab movieDetails = {movieDetailsMock}/>
      </Container>
    </div>
  )
}

export default DetailsPage
