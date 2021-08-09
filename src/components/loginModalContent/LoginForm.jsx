import {
  TextField,
  makeStyles,
  IconButton,
  Button,
  InputAdornment,
  CircularProgress
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { signInUserAction } from '../../redux/actions/userAction';


// STYLES =================================================
const useStyles = makeStyles(theme => ({
  cardContent: {

  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(6, 0),
  },
  inputContainer: {
    marginBottom: theme.spacing(1),
  },
}))

// COMPONENT =================================================
const LoginForm = () => {
  // STATES ==============================================
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles()
  const {loading} = useSelector(state => state.user);
  const dispatch = useDispatch();

  // FORMIK VALIDATION YUP =================================================
  const validationOnLogin = yup.object({
    email: yup
      .string('Enter your username')
      .email('Please Enter a Valid Email')
      .required('username is required'),
    password: yup
      .string('Enter your password')
      // .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required')
  });

  // FORMIK SETUP ========================================
  const initialFormikOnLogin = {
    email: '',
    password: ''
  };

  const formik = useFormik({
    initialValues: initialFormikOnLogin,
    validationSchema: validationOnLogin,
    onSubmit: (values) => {
      // console.log(values);
      // alert(JSON.stringify(values));
      dispatch(signInUserAction(values));

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
            color="primary"
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
          <Button startIcon={loading ? <CircularProgress thickness={6} size={20} color="secondary"/> : null} type="submit" variant="contained" color="primary" fullWidth>Login</Button> :
        </div>
    </form>

  )
}

export default LoginForm
