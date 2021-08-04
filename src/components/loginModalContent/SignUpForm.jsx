import {
  TextField,
  makeStyles,
  IconButton,
  Button,
  InputAdornment,
  CircularProgress,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import {signUpUser} from '../../redux/actions/userAction'
import { useHistory } from 'react-router-dom';


// STYLES =================================================
const useStyles = makeStyles(theme => ({
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
}))

// COMPONENT =================================================
const SignUpForm = ({toggleOpenLogin}) => {
  // STATES ==============================================
  const dispatch =  useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles()
  const history = useHistory();

  // FORMIK VALIDATION YUP =================================================
  const validationOnSignUp = yup.object({
    user_name: yup
      .string('Enter your username')
      .required('username is required')
      .matches(/^[\w_\-.\d]+$/gi, "Username must not contain space and special characters"),
      
    full_name: yup
      .string('Enter your full name')
      .required('full name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  // FORMIK SETUP ========================================
  const initialFormikOnSignUp = {
    user_name: '',
    full_name: '',
    email: '',
    password: '',
  };

  const handleSubmitRegister = (values) => {
    const newUser = [
      values.user_name,
      values.full_name,
      values.email,
      values.password,
      values.image
    ]
    dispatch(signUpUser(...newUser));
    setLoading(false);
    history.push('/'); // redirect to home
    toggleOpenLogin();
  }
  const formik = useFormik({
    initialValues: initialFormikOnSignUp,
    validationSchema: validationOnSignUp,
    onSubmit: (values) => {
      setLoading(true);
      handleSubmitRegister(values);
    },
  });

  // METHODS =====================================
  const handleClickShowPassword = () => {
    setShowPassword(state => !state);
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }

  // RETURN =======================================
  return (
    <form onSubmit={formik.handleSubmit}>
        <div className={classes.inputContainer}>
          <TextField
            id="user_name"
            name="user_name"
            label="UserName"
            value={formik.values.user_name}
            onChange={formik.handleChange}
            error={formik.touched.user_name && Boolean(formik.errors.user_name)}
            helperText={formik.touched.user_name && formik.errors.user_name}
            onBlur={formik.handleBlur}
            color="secondary"
            variant="filled"
            fullWidth />
        </div>
        <div className={classes.inputContainer}>
          <TextField
            id="full_name"
            name="full_name"
            label="Full Name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            error={formik.touched.full_name && Boolean(formik.errors.full_name)}
            helperText={formik.touched.full_name && formik.errors.full_name}
            onBlur={formik.handleBlur}
            color="secondary"
            variant="filled"
            fullWidth />
        </div>
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
            color="secondary"
            variant="filled"
            fullWidth />
        </div>
        <div className={classes.inputContainer}>
          <TextField
            id="password"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            type={showPassword ? "text" : "password"}
            color="secondary"
            variant="filled"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        <div className={classes.cardActions}>
          <Button startIcon={loading ? <CircularProgress thickness={6} size={20} color="primary"/> : null} type="submit" variant="contained" color="secondary" fullWidth>Sign up</Button> :
        </div>
    </form>

  )
}

export default SignUpForm
