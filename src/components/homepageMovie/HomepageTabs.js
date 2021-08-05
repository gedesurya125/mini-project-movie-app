import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomepageMovieListALL from "../homepageMovie/HomepageMovieListALL";
import Anime from "../homepageMovie/Anime";
import Action from "../homepageMovie/Action";
import Adventure from "../homepageMovie/Adventure";
import SciFi from "../homepageMovie/SciFi";
import Comedy from "../homepageMovie/Comedy";
import "../../assets/styles/HomepageTabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .PrivateTabIndicator-colorSecondary-35": {
      display: "none",
    },
    "& .MuiTabs-flexContainer": {
      backgroundColor: "#fafafa",
    },
    "& .MuiPaper-elevation4": {
      boxShadow: "none",
      backgroundColor: "none",
    },
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    "& Button": {
      color: "#CDCDCD",
      fontSize: "12px",
      "&:hover": {
        backgroundColor: "#EB507F",
        borderRadius: "30px",
      },
      "&:active": {
        backgroundColor: "#EB507F",
        borderRadius: "30px",
      },
      "&:focus": {
        backgroundColor: "#EB507F",
        borderRadius: "30px",
      },
    },
    "& h4": {
      textAlign: "center",
    },
  },
}));

export default function HomepageTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h4>Browse by Category</h4>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Anime" {...a11yProps(1)} />
          <Tab label="Action" {...a11yProps(2)} />
          <Tab label="Adventure" {...a11yProps(3)} />
          <Tab label="Science Fiction" {...a11yProps(4)} />
          <Tab label="Comedy" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomepageMovieListALL />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Anime />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Action />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Adventure />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SciFi />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Comedy />
      </TabPanel>
    </div>
  );
}
