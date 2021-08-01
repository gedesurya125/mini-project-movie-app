import React, { useState } from 'react'
import headerlogo from '../assets/img/headerlogo.png'
import { AppBar, Container, Toolbar, TextField, makeStyles, InputAdornment, Button, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import LoginModal from './LoginModal';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white'
  },
  logo:{
    display: 'flex'
  },
  logoText: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: "block"
    }
  },
  toolbar: {
    // width: '100%'
    justifyContent: 'space-around',
    '& img': {
      marginRight: theme.spacing(1.5)
    }
  },
  search: {
    // width: '70%'
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%'
    },
    [theme.breakpoints.up('md')]: {
      width: '60%'
    }
  },

  login: {
    marginLeft: theme.spacing(1.5)
    // display: 'none',
    // [theme.breakpoints.up('sm')]:{
    //   display: 'block'
    // },
  }
}))

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  const classes = useStyles();

  const toggleOpenLogin = () => {
    setLoginOpen(state => !state);
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
                ),
              }}
            />
          </div>


          <div className={classes.login}>
            <Button variant="contained" color="primary" onClick={toggleOpenLogin}>Login</Button>
          </div>
        </Toolbar>
      </Container>
      <LoginModal isOpen={loginOpen} toggleOpenLogin={toggleOpenLogin} />
    </AppBar>
  )
}

export default Header
