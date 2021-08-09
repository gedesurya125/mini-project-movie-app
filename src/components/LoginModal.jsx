import {
  Modal,
  Fade,
  makeStyles,
  Card,
  Typography,
  Divider,
  CardContent,
  Paper
} from '@material-ui/core'
import React, { useState } from 'react';
// import headerLogo from '../assets/img/headerlogo.png'
import headerLogo from '../assets/img/tiger.png'

import LoginForm from './loginModalContent/LoginForm';
import SignUpForm from './loginModalContent/SignUpForm';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalLogInAction } from '../redux/actions/modalAction';
import { Warning } from '@material-ui/icons';
import { closeInfoLoginModalAction } from '../redux/actions/userAction';

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
  },
  loginInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    background: theme.palette.error.main,
    color: theme.palette.common.white
    
  }
}))





// COMPONENT =================================================
const LoginModal = () => {
  // STATES ==============================================
  const [displaySignUp, setdisplaySignUp] = useState(false); // sign in or sign up
  const classes = useStyles()
  const dispatch = useDispatch()
  const { modalLogIn } = useSelector(state => state.modals) //
  const user = useSelector(state => state.user);

  const closeModalLogIn = () => {
    dispatch(closeModalLogInAction());
    dispatch(closeInfoLoginModalAction());
  }
  // console.log(modalLogIn);
  // RETURN =======================================
  return (
    <Modal
      open={modalLogIn} //
      onClose={closeModalLogIn} //
      className={classes.root}
      closeAfterTransition
    >
      <Fade in={modalLogIn}>

        <Card className={classes.rootCard}>
          <CardContent>

            <div className={classes.logoCard}>
              <img src={headerLogo} alt="" />
              <Typography variant="h3">MacanTV</Typography>
            </div>
            {user.openInfoModal ?
              <Paper className={classes.loginInfo}>
                <Warning />
                <Typography>Make sure your email and password corrects</Typography>
              </Paper>
              : null
            }
            <Divider />
            {displaySignUp ? <SignUpForm /> : <LoginForm />}
            <div className={classes.cardInfo}>
              {displaySignUp ?
                <Typography>Already have an account ?, <span className={`${classes.signLink} ${classes.signInColor}`} onClick={() => setdisplaySignUp(false)}>Sign In</span></Typography> :
                <Typography>Don't have an account ?, <span className={`${classes.signLink} ${classes.signUpColor}`} onClick={() => {setdisplaySignUp(true); dispatch(closeInfoLoginModalAction())}}>Sign Up</span></Typography>
              }
            </div>


          </CardContent>

        </Card>

      </Fade>
    </Modal>
  )
}

export default LoginModal
