import React from "react";
import HomepageCarousel from "../components/homepageMovie/HomepageCarousel";
// import HomePageTabs from "../components/homepageMovie/HomepageTabs";
import { useSelector, useDispatch } from "react-redux";
import CategoryList from "../components/homepageMovie/CategoryList";
import MovieListContainer from "../components/homepageMovie/MovieListContainer";
import { Pagination } from '@material-ui/lab'
import { makeStyles } from "@material-ui/styles";
import { getMoviesAction } from "../redux/actions/moviesAction";
import { setCategoryAction, resetCategoryAction, setPageCategoryAction } from "../redux/actions/categorySelectAction";
import {
  Typography,
  Container,
  Divider
} from "@material-ui/core";
// import { Provider } from "react-redux";

const useStyles = makeStyles(theme => ({
  pagination: {
    '& .MuiPagination-ul': {
      margin: theme.spacing(2, 'auto'),
      justifyContent: 'center'
    }
  },
  titleText: {
    margin: theme.spacing(2, 0)
  }
}))



const HomePage = () => {

  const dispatch = useDispatch();

  const topMovies = useSelector(state => state.topMovies.data.data);
  const movieToDisplay = useSelector(state => state.movies.data);
  const displayStatus = useSelector(state => state.selectedCategory);

  // const [movieDisplay, setMovieDisplay] = useState({
  //   category: 'all',
  //   page: 1
  // })

  const classes = useStyles();


  const handleCategoryChange = (category) => {
    dispatch(getMoviesAction({ page: 1, size: 10, category }));
    dispatch(setCategoryAction(category));
    console.log('NOW CATEGORY IS,', category)
  }

  const handleResetCategory = () => {
    dispatch(getMoviesAction({ page: 1, size: 10 }));
    dispatch(resetCategoryAction());
  }
  const handlePageChange = (event, value) => {
    if(value < 1 || value > movieToDisplay.total_page) return; // prevent error
    if (displayStatus.value === "") {
      dispatch(getMoviesAction({ page: value, size: 10}))
    }else{
      dispatch(getMoviesAction({page: value, size: 10, category: displayStatus.value}))
    }
    dispatch(setPageCategoryAction(value));
  }


  return (
    // <BrowserRouter>
    //   <div className="screen">
    //     <div className="wrapper">
    //       <HomepageCarousel posters={posterOnly} />
    //       <HomepageTabs />
    //       <BasicPagination />
    //     </div>
    //   </div>
    // </BrowserRouter>
    <div>
      {topMovies && <HomepageCarousel topMovies={topMovies} />}
      {/* CATEGORY LIST */}
      <Container>
        <CategoryList category={displayStatus.value} changeCategory={handleCategoryChange} resetCategory={handleResetCategory} />
        <Divider />
        {/* DISPLAY MOVIE */}
        <Typography className={classes.titleText} align="center" variant="h4" gutterBottom>{displayStatus.name.toUpperCase()}</Typography>
        {movieToDisplay && <MovieListContainer movies={movieToDisplay.data} />}
        <Pagination className={classes.pagination} count={movieToDisplay.total_page} color="primary" page={displayStatus.page} onChange={handlePageChange} />
      </Container>
    </div>
  );
};

export default HomePage;
