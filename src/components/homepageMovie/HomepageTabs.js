// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import HomepageMovieListALL from "../homepageMovie/HomepageMovieListALL";
// import Anime from "../homepageMovie/Anime";
// import Action from "../homepageMovie/Action";
// import Adventure from "../homepageMovie/Adventure";
// import SciFi from "../homepageMovie/SciFi";
// import Comedy from "../homepageMovie/Comedy";
// import "../../assets/styles/HomepageTabs.css";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .PrivateTabIndicator-colorSecondary-35": {
//       display: "none",
//     },
//     "& .MuiTabs-flexContainer": {
//       backgroundColor: "#fafafa",
//     },
//     "& .MuiPaper-elevation4": {
//       boxShadow: "none",
//       backgroundColor: "none",
//     },
//     // flexGrow: 1,
//     // backgroundColor: theme.palette.background.paper,
//     "& Button": {
//       color: "#CDCDCD",
//       fontSize: "12px",
//       "&:hover": {
//         backgroundColor: "#EB507F",
//         borderRadius: "30px",
//       },
//       "&:active": {
//         backgroundColor: "#EB507F",
//         borderRadius: "30px",
//       },
//       "&:focus": {
//         backgroundColor: "#EB507F",
//         borderRadius: "30px",
//       },
//     },
//     "& h4": {
//       textAlign: "center",
//     },
//   },
// }));

// export default function HomepageTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <h4>Browse by Category</h4>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="simple tabs example"
//         >
//           <Tab label="All" {...a11yProps(0)} />
//           <Tab label="Anime" {...a11yProps(1)} />
//           <Tab label="Action" {...a11yProps(2)} />
//           <Tab label="Adventure" {...a11yProps(3)} />
//           <Tab label="Science Fiction" {...a11yProps(4)} />
//           <Tab label="Comedy" {...a11yProps(5)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         <HomepageMovieListALL />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Anime />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <Action />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <Adventure />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <SciFi />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <Comedy />
//       </TabPanel>
//     </div>
//   );
// }

//==========================================================================

import React, { useState } from 'react';
import { alpha, makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../TabPanel';
import { useSelector } from 'react-redux';
import MovCategoryPanel from './homePageTabPanel/MovCategoryPanel';
// import OverViewPanel from './DetailPanels/OverViewPanel';
// import ActorsPanel from './DetailPanels/ActorsPanel';
// import ReviewsPanel from './DetailPanels/ReviewsPanel';

const MovCategoryTabs = withStyles(theme => ({
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

const MovCategoryTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    padding: '5px',
    minWidth: 120,
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

const HomePageTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const movCategory = useSelector(state => state.movieCategory.data);
  console.log('MOVIE CATEGORY LIST FROM HOMEPAGE TABS', movCategory);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };


  const renderCategoryTab = movCategory.map(category => <MovCategoryTab key={category._id} label={category.category} />)
  const renderCategoryPanel = movCategory.map((category, index) => (
    <TabPanel key={category._id} value={value} index={index} dir={theme.direction}>
      <MovCategoryPanel category={category.category}/>
    </TabPanel>
  ))

  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <MovCategoryTabs
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          aria-label="MovDetails example">
          {/* <MovDetailsTab label="Overview" />
          <MovDetailsTab label="Actors" />
          <MovDetailsTab label="Review" /> */}
          {/* <MovCategoryTab label="Adventures"/> */}
          {renderCategoryTab}
        </MovCategoryTabs>
      </div>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        {renderCategoryPanel}




        {/* <TabPanel value={value} index={0} dir={theme.direction}>
          <OverViewPanel movieDetails = {movieDetails}/>
          SOME CONTENT // NEED PANEL CONTENT
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ActorsPanel/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ReviewsPanel/>
        </TabPanel> */}
      </SwipeableViews>
    </div>
  );
}


export default HomePageTabs;