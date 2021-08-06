import {
  Button,
  ButtonGroup,
  makeStyles
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import React from 'react'

// STYLES ======================================================
const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    textAlign: 'center',
    margin: theme.spacing(2, 'auto'),
  },
  selectedButton: {
    background: theme.palette.primary.dark,
    '& .MuiButton-root': {
    },
  }
}))

// MAIN COMPONENT ===============================================
const CategoryList = ({ category, changeCategory, resetCategory }) => {
  const classes = useStyles();
  const categoryList = useSelector(state => state.movieCategory.data);
  // console.log('CATEGORY FROM CATEGORY LIST', category);



  const renderButtonNav = categoryList.map(categ => (
    <Button
      className={category.toLowerCase() === categ.category.toLowerCase() ? classes.selectedButton : ""}
      key={categ._id} variant="contained"
      color="primary"
      onClick={() => changeCategory(categ.category)}
    >{categ.category}</Button>
  ))
  return (
    <div>
      <ButtonGroup className={classes.root}>
        <Button
          className={category.toLowerCase() === "" ? classes.selectedButton : ""}
          variant="contained"
          color="primary"
          onClick={() => resetCategory()}//
          >All</Button>
        {renderButtonNav}
      </ButtonGroup>
    </div>
  )
}

export default CategoryList
