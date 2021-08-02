import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';


const useStyle = makeStyles(theme => ({
  imageInput: {
    display: 'flex',
    alignItems: 'center'
  },
  imageButton: {
    marginRight: theme.spacing(1)
  }
}))

const FileInput = ({value, onChange}) => {
  const classes = useStyle();
  return (
    <div className={`${classes.imageInput} ${classes.inputForm}`}>
      <label htmlFor="image_select_125">
        <Button className={classes.imageButton} variant="contained" color="secondary" component="span">Choose</Button>
      </label>
      <input accept="image/*" id="image_select_125" onChange={onChange} style={{ display: 'none' }} type="file" />
      <Typography>{value || "Select an image"}</Typography>
    </div>
  )
}

export default FileInput
