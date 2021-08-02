import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  boxPanel:{
    padding: theme.spacing(3, 0)
  }
}))
const TabPanel =(props) => {
  const classes = useStyles()
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.boxPanel}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;