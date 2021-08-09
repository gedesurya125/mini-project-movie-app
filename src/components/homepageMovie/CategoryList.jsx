import {
  Button,
  ButtonGroup,
  Grow,
  makeStyles,
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Typography
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import React, { useRef } from 'react'
import { ArrowDropDown } from '@material-ui/icons'
import { useState } from 'react'

// STYLES ======================================================
const useStyles = makeStyles(theme => ({
  title:{
    marginTop: theme.spacing(2)
  },
  root: {
    display: 'none',
    textAlign: 'center',
    margin: theme.spacing(2, 'auto'),
    [theme.breakpoints.up('sm')]:{
      display: 'block'
    }
  },
  selectedButton: {
    background: theme.palette.primary.dark,
    '& .MuiButton-root': {
    },
  },

  dropDownButton: {
    display: 'block',
    textAlign: 'center',
    margin: theme.spacing(2, 'auto'),
    zIndex: 200,
    [theme.breakpoints.up('sm')]:{
      display: 'none'
    }
  },
  popperList: {
    zIndex: 1
  }

}))

// MAIN COMPONENT ===============================================
const CategoryList = ({ category, changeCategory, resetCategory }) => {
  const anchorRef = useRef(null);
  const classes = useStyles();
  const categoryList = useSelector(state => state.movieCategory.data);
  const [openList, setOpenList] = useState(false)
  // console.log('CATEGORY FROM CATEGORY LIST', category);



  const renderButtonNav = categoryList.map(categ => (
    <Button
      className={category.toLowerCase() === categ.category.toLowerCase() ? classes.selectedButton : ""}
      key={categ._id} variant="contained"
      color="primary"
      onClick={() => changeCategory(categ.category)}
    >{categ.category}</Button>
  ))

  const toggleOpenList = () => {
    setOpenList(state => !state)
  }

  const handleCloseList = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpenList(false);
  }

  return (
    <div>
      <Typography className={classes.title} variant="h5" align="center">Select Category</Typography>
      {/* NORMAL BUTTON FOR PC */}
      <ButtonGroup className={classes.root}>
        <Button
          className={category.toLowerCase() === "" ? classes.selectedButton : ""}
          variant="contained"
          color="primary"
          onClick={() => resetCategory()}//
        >All</Button>
        {renderButtonNav}
      </ButtonGroup>

      {/* DROPDOWN BUTTON MOBILE */}
      <ButtonGroup className={classes.dropDownButton} ref={anchorRef}>
        <Button variant="contained" color="primary" >{category || "All"}</Button>
        <Button variant="contained" color="primary" onClick={toggleOpenList}><ArrowDropDown /></Button>
      </ButtonGroup>
      <Popper className={classes.popperList} open={openList} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseList}>
                <MenuList className={classes.menuListContainer}>
                  <MenuItem
                    selected={category.toLowerCase() === ""}
                    onClick= {() => resetCategory()}
                  >
                    All
                  </MenuItem>
                  {categoryList.map(categ => (
                    <MenuItem
                      key={categ._id}
                      selected={category.toLowerCase() === categ.category.toLowerCase()}
                      onClick={() => changeCategory(categ.category)}
                    >
                      {categ.category}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

    </div>
  )
}

export default CategoryList
