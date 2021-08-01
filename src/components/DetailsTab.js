import React, { useState } from 'react';
import { alpha, makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views';
import TabPanel from './TabPanel';
import OverViewPanel from './DetailPanels/OverViewPanel';
import ActorsPanel from './DetailPanels/ActorsPanel';
import ReviewsPanel from './DetailPanels/ReviewsPanel';

const MovDetailsTabs = withStyles(theme => ({
  root: {
    // borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: alpha(theme.palette.primary.main, 1),//'#1890ff',
    border: `0.2em solid ${theme.palette.primary.main}`,
    height: '100%',
    borderRadius: '5em',
    // zIndex: 
  },
}))(Tabs);

const MovDetailsTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    padding: '5px',
    minWidth: 100,
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(4),
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: theme.palette.primary.light,
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.common.white,//theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
    },
    // '&:focus': {
    //   color: '#40a9ff',
    // },
    zIndex: '1'
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  padding: {
    padding: theme.spacing(3),
  },
  tabsContainer: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center'
  },
}));

export default function DetailsTab({movieDetails}) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <MovDetailsTabs
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          aria-label="MovDetails example">
          <MovDetailsTab label="Overview" />
          <MovDetailsTab label="Actors" />
          <MovDetailsTab label="Review" />
        </MovDetailsTabs>
      </div>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <OverViewPanel movieDetails = {movieDetails}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ActorsPanel/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ReviewsPanel/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
