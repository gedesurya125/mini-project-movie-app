import React, { useState } from 'react'
import headerlogo from '../assets/img/headerlogo.png'
import {
  AppBar,
  Container,
  Toolbar,
  TextField,
  makeStyles,
  InputAdornment,
  Button,
  Typography,
  Avatar,
  IconButton
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white'
  },
  logo: {
    display: 'flex'
  },
  logoText: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: "block",
      margin: theme.spacing(0, 1)
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
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '80%'
    },
    [theme.breakpoints.up('md')]: {
      width: '75%'
    }
  },

  imageAvatar: {
    width: '130%',
    marginTop: '30%'
  },

  login: {
    marginLeft: theme.spacing(1.5)
    // display: 'none',
    // [theme.breakpoints.up('sm')]:{
    //   display: 'block'
    // },
  },
}))

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  const [userMenu, setUserMenu] = useState({ // state for user menu list
    open: false,
    anchorEl: null
  })
  const user = useSelector(state => state.user) // get User Status
  const [search, setSearch] = useState({
    value: '',
    element: null
  })
  const classes = useStyles();

  const toggleOpenLogin = () => {
    setLoginOpen(state => !state);
  }

  const handleSearch = (e) => {
    setSearch(state => ({
      ...state,
      value: e.target.value,
      element: e.currentTarget
    }))
  }

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

  return (
    <AppBar position="sticky" className={classes.root}>
      <Container>
        <Toolbar variant="dense" disableGutters className={classes.toolbar}>
          <div className={classes.logo}>
            <img src={headerlogo} alt="" width="50em" />
            <Typography className={classes.logoText} component="span" color="textPrimary" variant="h4">MilanTV</Typography>
          </div>
          <div className={classes.search}>
            <TextField
              value={search.value}
              onChange={handleSearch}
              placeholder="search movie ..."
              variant="outlined"
              size="small"
              color="secondary"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div className={classes.login}>
            {
              user?.logged_in ?
                <IconButton onClick={handleUserMenuOpen}>
                  <Avatar
                    alt=""
                    src={user?.data?.image}
                    imgProps={{
                      className: classes.imageAvatar,
                    }}
                  >{user?.data?.username[0].toUpperCase()}</Avatar>
                </IconButton> :
                <Button variant="contained" color="primary" onClick={toggleOpenLogin}>Login</Button>
            }
          </div>
        </Toolbar>
      </Container>
      <LoginModal isOpen={loginOpen} toggleOpenLogin={toggleOpenLogin} />
      <UserMenu open={userMenu.open} anchorEl={userMenu.anchorEl} onClose={handleUserMenuClose} />



    </AppBar>
  )
}

export default Header
