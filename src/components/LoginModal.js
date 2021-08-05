import {
  TextField,
  Modal,
  Fade,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Button,
  Typography,
  InputAdornment,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import headerLogo from "../assets/img/headerlogo.png";
import { useFormik } from "formik";
import * as yup from "yup";

// STYLES =================================================
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // closeButton: {
  //   '& .MuiSvgIcon-root': {
  //     color: theme.palette.secondary.main
  //   },
  //   '&:hover': {
  //     background: theme.palette.secondary.light,
  //     '& .MuiSvgIcon-root': {
  //       color: theme.palette.common.white
  //     }
  //   }
  // },

  rootCard: {
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(70),
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(100),
    },
  },
  logoCard: {
    // boxSizing: 'border-box',
    padding: theme.spacing(0, 4, 4, 4),
    display: "flex",
    justifyContent: "center",
    "& img": {
      height: theme.spacing(6),
    },
  },
  cardContent: {},
  cardActions: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(6, 0),
    // '& .MuiButtonBase-root':{
    //   margin: theme.spacing(2)
    // }
  },
  inputContainer: {
    marginBottom: theme.spacing(1),
  },
  signUpLink: {
    color: theme.palette.primary.main,
    "&:hover": {
      cursor: "pointer",
    },
  },
  cardInfo: {
    display: "flex",
    justifyContent: "center",
  },
}));

// COMPONENT =================================================
const LoginModal = ({ isOpen, toggleOpenLogin }) => {
  // STATES ==============================================
  const [showPassword, setShowPassword] = useState(false);
  const [displaySignUp, setdisplaySignUp] = useState(false); // sign in or sign up
  const classes = useStyles();

  // FORMIK VALIDATION YUP =================================================
  const validationOnSignUp = {
    userName: yup
      .string("Enter your username")
      .required("username is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  };

  const validationOnLogin = {
    userName: yup
      .string("Enter your username")
      .required("username is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  };
  const selectValidation = () => {
    if (displaySignUp) return validationOnSignUp;
    return validationOnLogin;
  };

  const validationSchema = yup.object(selectValidation());

  // FORMIK SETUP ========================================
  const initialFormikOnSignUp = {
    userName: "",
    email: "",
    password: "",
  };

  const initialFormikOnLogin = {
    userName: "",
    password: "",
  };

  const selectInitialValueFormik = () => {
    if (displaySignUp) return initialFormikOnSignUp;
    return initialFormikOnLogin;
  };
  const formik = useFormik({
    initialValues: selectInitialValueFormik(),
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // ELEMENT ACTIONS =====================================
  const handleClickShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      open={isOpen}
      onClose={toggleOpenLogin}
      className={classes.root}
      closeAfterTransition
    >
      <Fade in={isOpen}>
        <form onSubmit={formik.handleSubmit}>
          <Card className={classes.rootCard}>
            <CardHeader
            // action={
            //   <IconButton className={classes.closeButton}>
            //     <Close />
            //   </IconButton>
            // }
            ></CardHeader>
            <div className={classes.logoCard}>
              <img src={headerLogo} alt="" />
              <Typography variant="h3">MilanTV</Typography>
            </div>

            <Divider />
            <CardContent className={classes.cardContent}>
              <div className={classes.inputContainer}>
                <TextField
                  id="userName"
                  name="userName"
                  label="UserName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.userName && Boolean(formik.errors.userName)
                  }
                  helperText={formik.touched.userName && formik.errors.userName}
                  onBlur={formik.handleBlur}
                  color="primary"
                  variant="filled"
                  fullWidth
                />
              </div>

              {displaySignUp && (
                <div className={classes.inputContainer}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                    color="primary"
                    variant="filled"
                    fullWidth
                  />
                </div>
              )}

              <div className={classes.inputContainer}>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  onBlur={formik.handleBlur}
                  type={showPassword ? "text" : "password"}
                  color="primary"
                  variant="filled"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className={classes.cardActions}>
                {displaySignUp ? (
                  <Button variant="contained" color="secondary" fullWidth>
                    Sign up
                  </Button>
                ) : (
                  <Button variant="contained" color="primary" fullWidth>
                    Login
                  </Button>
                )}
                {/* <Button variant="contained" color="secondary">Cancel</Button> */}
              </div>
              <div className={classes.cardInfo}>
                {displaySignUp ? (
                  <Typography>
                    Already have an account ?,{" "}
                    <span
                      className={classes.signUpLink}
                      onClick={() => setdisplaySignUp(false)}
                    >
                      Sign In
                    </span>
                  </Typography>
                ) : (
                  <Typography>
                    Don't have an account ?,{" "}
                    <span
                      className={classes.signUpLink}
                      onClick={() => setdisplaySignUp(true)}
                    >
                      Sign Up
                    </span>
                  </Typography>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </Fade>
    </Modal>
  );
};

export default LoginModal;
