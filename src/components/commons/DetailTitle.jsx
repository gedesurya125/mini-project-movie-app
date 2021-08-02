import { Typography, makeStyles} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
  titles: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiTypography-root': {
      paddingRight: theme.spacing(2),
      whiteSpace: 'nowrap'
    },
    '& span': {
      width: '100%',
      display: 'inline-block',
      backgroundColor: theme.palette.text.secondary,
      height: '0.4em',
      borderRadius: '1em'
    }
  }
}));

const DetailTitle = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.titles}>
      <Typography variant="h4">{children}</Typography>
      <span></span>
    </div>
  )
}

export default DetailTitle;