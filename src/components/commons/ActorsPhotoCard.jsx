import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { convertToTitle } from '../../tools/stringManipulation';

const ActorsPhotoCard = ({ actor }) => {

  const useStyles = makeStyles(theme => ({
    actorPhotoContainer: {
      boxSizing:'content-box',
      width: '100%',
      [theme.breakpoints.up('sm')]:{
        width: '40%'
      },

      [theme.breakpoints.up('md')]:{
        width: '30%',
      },
      [theme.breakpoints.up('lg')]:{
        width: '20%',
      },
      borderRadius: '1.2em',
      // margin: '1em',
      '& .MuiCardContent-root': {
        backgroundImage: `url(${actor.photo})`,
        height: '25em',
        backgroundSize: 'cover',
        // display: 'flex',
        // alignItems: 'flex-end',
        // justifyContent: 'center'
        position: 'relative',
      },
    },
    cardText:{
      position: 'absolute',
      width: '100%',
      bottom: '20px',
      left: '0px',
      background: `linear-gradient(90deg, ${theme.palette.primary.dark},${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
      textAlign: 'center',
      padding: theme.spacing(0.2, 0),
      // borderRadius: '1em',
      color: 'white',
      boxShadow: '3px 3px 5px black',

      '& .MuiTypography-root':{
        fontWeight: theme.typography.fontWeightMedium
      }
    },

  }));

  const classes = useStyles();
  return (
    <Card elevation={3} className={classes.actorPhotoContainer}>
      <CardContent>
        {/* <img src={actor.photo} alt="..."/> */}
        <div className={classes.cardText}>
          <Typography align="center" variant="h4" >{convertToTitle(actor.name)}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default ActorsPhotoCard
