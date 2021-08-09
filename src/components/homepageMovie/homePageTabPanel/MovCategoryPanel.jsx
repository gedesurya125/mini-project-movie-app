import React, {useEffect, useState} from 'react'
// import ActorsPhotoCard from '../commons/ActorsPhotoCard'
import { makeStyles, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getMoviesAction } from '../../../redux/actions/moviesAction'


// MOCK DATA ACTORS =============================================
// Setelah ada API data MOCK ini di hapus
// kemudian Langsung tembak data di store  dengan useSelector
// const MovieActors = [
//   {
//     "id": "1",
//     "name": "richardo kaka",
//     "photo": "https://image.tmdb.org/t/p/w500/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg"
//   },
//   {
//     "id": "2",
//     "name": "richardo kaka",
//     "photo": "https://image.tmdb.org/t/p/w500/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg"
//   },
//   {
//     "id": "3",
//     "name": "richardo kaka",
//     "photo": "https://image.tmdb.org/t/p/w500/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg"
//   },
//   {
//     "id": "4",
//     "name": "richardo kaka",
//     "photo": "https://image.tmdb.org/t/p/w500/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg"
//   },
//   {
//     "id": "5",
//     "name": "richardo kaka",
//     "photo": "https://image.tmdb.org/t/p/w500/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg"
//   },
//   {
//     "id": "6",
//     "name": "richardo kaka",
//     "photo": "https://image.tmdb.org/t/p/w500/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg"
//   },
//   {
//     "id": "7",
//     "name": "richardo kaka",
//     "photo": "https://image.tmdb.org/t/p/w500/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg"
//   },
//   {
//     "id": "8",
//     "name": "richardo kaka",
//     "photo": "https://image.tmdb.org/t/p/w500/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg"
//   },
//   {
//     "id": "9",
//     "name": "richardo kaka",
//     "photo": "https://image.tmdb.org/t/p/w500/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg"
//   },

// ]


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
const MovCategoryPanel = ({category}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  // const renderActors = MovieActors.map((actor) => (
  //   <ActorsPhotoCard key={actor.id} actor={actor} />
  // ))

  // useEffect(() => {
  //   dispatch(getMoviesAction({
  //     page,
  //     size: 10,
  //     category
  //   }))
  // },[category, dispatch, page])

  return (
    <div>
      <Typography align="center" variant="h3" gutterBottom>{category}</Typography>
      <div className={classes.root}>
        {/* {renderActors} */}


        {/* GET DATA BERDASARKAN CATEGORY YANG TELAH DITERIMA LEWAT PROPS */}



        {category}
      </div>
    </div>
  )
}

export default MovCategoryPanel
