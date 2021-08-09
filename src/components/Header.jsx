import React, { useState, useEffect } from 'react'
// import headerlogo from '../assets/img/headerlogo.png'
import headerlogo from '../assets/img/tiger.png';
import {
  AppBar,
  Container,
  Toolbar,
  TextField,
  makeStyles,
  Button,
  Typography,
  Avatar,
  IconButton,
  // ButtonGroup
} from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';
import { useSelector, useDispatch } from 'react-redux';
import { openModalLogInAction } from '../redux/actions/modalAction';
import { useHistory } from 'react-router-dom'
import { Autocomplete } from '@material-ui/lab';
import { getSearchedMovieAction } from '../redux/actions/moviesAction';
import { sourceUrl } from '../redux/Api/setupAPI';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#3E2211'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.3),
    '&:hover': {
      cursor: 'pointer'
    }
  },
  logoText: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: "block",
      marginLeft: theme.spacing(1)
    }
  },
  toolbar: {
    // width: '100%'
    justifyContent: 'space-around',
    '& img': {
      // marginRight: theme.spacing(1.5)
    }
  },
  search: {
    // width: '70%'
    marginLeft: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '80%'
    },
    [theme.breakpoints.up('md')]: {
      width: '75%'
    }
  },

  imageAvatar: {
    width: '100%',
    // marginTop: '30%'
  },

  login: {
    marginLeft: theme.spacing(1)
  },
  iconAvatar: {
    padding: 0,
  },
  inputSearch:{
    color: 'black',
    // background: 'white'
    background: 'white'
  },
  inputRoot:{
    '& .MuiInputBase-input':{
      color: 'white',
    },
  },
  outlineIput:{
    borderColor: 'white !important'
  }
}))


const Header = () => {


  const searchedMovie = useSelector(state => state.searchedMovie);

  let options = [
    '',
    ...searchedMovie.data.map(movie => movie.title)
  ]
  const history = useHistory()
  const dispatch = useDispatch();
  const [userMenu, setUserMenu] = useState({ // state for user menu list
    open: false,
    anchorEl: null
  })
  const user = useSelector(state => state.user) // get User Status
  // const [search, setSearch] = useState({
  //   value: '',
  //   element: null
  // })

  // AUTO COMPLETE REQUIREMENT
  const [autoSearch, setAutoSearch] = useState({
    value: options[0],
    inputValue: ''
  })
  //=========================
  const classes = useStyles();

  const openMoalLogIn = () => {
    dispatch(openModalLogInAction());
  }

  // const handleSearch = (e) => {
  //   setSearch(state => ({
  //     ...state,
  //     value: e.target.value,
  //     element: e.currentTarget
  //   }))
  // }

  const handleUserMenuOpen = (e) => {
    setUserMenu(state => ({
      ...state,
      open: true,
      anchorEl: e.currentTarget
    }))
  }

  const handleUserMenuClose = () => {
    setUserMenu(state => ({
      ...state,
      open: false,
      anchorEl: null
    }))
  }

  const redirectToHome = () => {
    history.push('/');
  }

  const handleSelectedSearchValue = (event, value) => {
    const selected = searchedMovie.data.find(movie => movie.title === value);
    // console.log('INI MOVIE YANG DICARI BRO: ', selected);
    if (selected) return history.push(`/details/${selected._id}`);
    setAutoSearch(state => ({
      ...state,
      value: value
    }))
  }

  const handleSearchInputChange = (event, value) => {
    setAutoSearch(state => ({
      ...state,
      inputValue: value
    }))
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(getSearchedMovieAction({ title: autoSearch.inputValue, size: 15 }))
    }, 800)
  }, [dispatch, autoSearch.inputValue])
  return (
    <AppBar position="sticky" className={classes.root}>
      <Container>
        <Toolbar variant="dense" disableGutters className={classes.toolbar}>
          <div onClick={redirectToHome} className={classes.logo}>
            <img src={headerlogo} alt="" width="50em" />
            <Typography className={classes.logoText} component="span" variant="h4">MacanTv</Typography>
          </div>
          <div className={classes.search}>
            {/* <ButtonGroup fullWidth> */}
              {/* <Button>Search</Button> */}
              <Autocomplete
                freeSolo
                value={autoSearch.value}
                onChange={handleSelectedSearchValue}
                inputValue={autoSearch.inputValue}
                onInputChange={handleSearchInputChange}
                id="search-bar" 
                options={options}
                renderInput={
                  (params) =>
                    <TextField
                      {...params}
                      variant="outlined"
                      size="small"
                      color="primary"
                      className={classes.inputRoot}
                      focused
                      fullWidth
                      placeholder="Search movie ..."
                    />
                }
              />
            {/* </ButtonGroup> */}
          </div>
          <div className={classes.login}>
            {
              user?.logged_in ? //if Logged In
                <IconButton className={classes.iconAvatar} onClick={handleUserMenuOpen}>
                  <Avatar
                    src={sourceUrl + user?.data?.image}
                    alt={user?.data?.username[0].toUpperCase()}
                    imgProps={{
                      className: classes.imageAvatar,
                    }}
                  />
                </IconButton> : //if not logged In
                <Button variant="contained" color="primary" onClick={openMoalLogIn}>Login</Button>
            }
          </div>
        </Toolbar>
      </Container>
      <LoginModal />
      <UserMenu open={userMenu.open} anchorEl={userMenu.anchorEl} onClose={handleUserMenuClose} />



    </AppBar>
  )
}

export default Header
