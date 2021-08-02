import React from 'react'
import { makeStyles, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import DateRange from '@material-ui/icons/DateRange';
import FaceIcon from '@material-ui/icons/Face';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
  detailsIcon: {
    backgroundColor: theme.palette.primary.main
  }
}));

const MovieInfoList = ({infoKey, infoDetails, allKeys}) => {
  
  const convertKeyToTitle = (str) =>{
    return str.split('_').map(word => word.charAt(0).toUpperCase()+word.substr(1).toLowerCase()).join(' ');
  }

  const selectIconInfo = (key) => {
    switch(key){
      case allKeys[0]: return (<DateRange/>); //date release
      case allKeys[1]: return (<FaceIcon/>);
      case allKeys[2]: return (<LibraryMusicIcon/>);
      case allKeys[3]: return (<AttachMoneyIcon/>)
      default: return (<FiberManualRecordIcon/>)
    }
  }
  const classes = useStyles();
  return (
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.detailsIcon}>
            {selectIconInfo(infoKey)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={infoDetails[infoKey]} secondary={convertKeyToTitle(infoKey)} />
      </ListItem>
  )
}

export default MovieInfoList
