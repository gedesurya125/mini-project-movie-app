import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography,
  Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
}));

const  AdminPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      <Typography>IT IS ADMIN PAGE</Typography>

      </Container>
    </div>
  );
}

export default AdminPage;