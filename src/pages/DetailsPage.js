import React from 'react';
import { makeStyles } from '@material-ui/core';

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
  posterImg: {
    width: '100%'
  }
}))


const DetailsPage = () => {
  const classes = useStyles()
  return (
    <div>
      <div>
        <img className={classes.posterImg} src={movieDetailsMock.poster} alt="..."/>
      </div>
    </div>
  )
}

export default DetailsPage
