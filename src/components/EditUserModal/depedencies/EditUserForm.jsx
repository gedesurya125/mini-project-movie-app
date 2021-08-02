import React, { useState } from 'react';
import { TextField, makeStyles, Button, IconButton } from '@material-ui/core';
import FileInput from '../../commons/FileInput';
import { useFormik } from 'formik';
import { userFormik } from '../../../tools/yupFormValidator';
import { Visibility, VisibilityOff } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  imageInput: {
    display: 'flex',
    alignItems: 'center'
  },
  imageButton: {
    marginRight: theme.spacing(1)
  },
  inputForm: {
    margin: theme.spacing(1, 'auto'),
  }
}))
const EditUserForm = () => {
  const [passVisible, setPassVisible] = useState(false);
  const formik = useFormik({
    initialValues: {
      ...userFormik.initialValues,
      image: {}
    },
    validationSchema: userFormik.validationSchema,
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values))
    }
  })


  const classes = useStyles();
  // const [image2, setImage2] = useState('');

  console.log('ini isi image2 :', formik.values.image);


  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.inputForm}>
          <TextField
            fullWidth
            id="user_name"
            name="user_name"
            label="User Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.user_name && Boolean(formik.errors.user_name)}
            helperText={formik.touched.user_name && formik.errors.user_name}
            variant="outlined"
            color="primary"
            size="small" />
        </div>
        <div className={classes.inputForm}>
          <TextField
            id="full_name"
            name="full_name"
            label="Full Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.full_name && Boolean(formik.errors.full_name)}
            helperText={formik.touched.full_name && formik.errors.full_name}
            fullWidth
            variant="outlined"
            color="primary"
            size="small" />
        </div>
        <div className={classes.inputForm}>
          <TextField
            id="email"
            name="email"
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            variant="outlined"
            color="primary"
            size="small" />
        </div>
        <div className={classes.inputForm}>
          <TextField
            id="password"
            name="password"
            label="Password"
            type={passVisible ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
            variant="outlined"
            color="primary"
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setPassVisible(state => !state)}>
                  {passVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              )
            }}
            size="small" />
        </div>
        <FileInput
          value={formik.values.image?.name}
          onChange={(e) => formik.setFieldValue('image', e.target.files[0])} />

        <Button
          fullWidth
          className={classes.inputForm}
          type="submit"
          variant="contained"
          color="primary">Save</Button>
      </form>
    </>
  )
}

export default EditUserForm
