import {
  Modal,
  Fade,
  makeStyles,
  Card,
  Typography,
  Divider,
  CardContent
} from '@material-ui/core'
import React, { useState } from 'react';
import headerLogo from '../assets/img/headerlogo.png'
import LoginForm from './loginModalContent/LoginForm';
import SignUpForm from './loginModalContent/SignUpForm';


// STYLES =================================================
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rootCard: {
    // paddng: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(70),
    },
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(100),
    }
  },
  logoCard: {
    // boxSizing: 'border-box',
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      height: theme.spacing(6)
    }
  },
  cardContent: {

  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(6, 0),
    // '& .MuiButtonBase-root':{
    //   margin: theme.spacing(2)
    // }
  },
  inputContainer: {
    marginBottom: theme.spacing(1),
  },
  signLink: {
    '&:hover': {
      cursor: 'pointer'
    }
  },

  signUpColor: {
    color: theme.palette.secondary.main,
  },
  signInColor: {
    color: theme.palette.primary.main,
  },
  cardInfo: {
    display: 'flex',
    justifyContent: 'center'
  }
}))





// COMPONENT =================================================
const LoginModal = ({ isOpen, toggleOpenLogin }) => {
  // STATES ==============================================
  const [displaySignUp, setdisplaySignUp] = useState(false); // sign in or sign up
  const classes = useStyles()

  // RETURN =======================================
  return (
    <Modal
      open={isOpen}
      onClose={toggleOpenLogin}
      className={classes.root}
      closeAfterTransition
    >
      <Fade in={isOpen}>

        <Card className={classes.rootCard}>
          <CardContent>

            <div className={classes.logoCard}>
              <img src={headerLogo} alt="" />
              <Typography variant="h3">MilanTV</Typography>
            </div>
            <Divider />
            {displaySignUp ? <SignUpForm toggleOpenLogin={toggleOpenLogin} /> : <LoginForm toggleOpenLogin={toggleOpenLogin}/>}
            <div className={classes.cardInfo}>
              {displaySignUp ?
                <Typography>Already have an account ?, <span className={`${classes.signLink} ${classes.signInColor}`} onClick={() => setdisplaySignUp(false)}>Sign In</span></Typography> :
                <Typography>Don't have an account ?, <span className={`${classes.signLink} ${classes.signUpColor}`} onClick={() => setdisplaySignUp(true)}>Sign Up</span></Typography>
              }
            </div>


          </CardContent>

        </Card>

      </Fade>
    </Modal>
  )
}

export default LoginModal
