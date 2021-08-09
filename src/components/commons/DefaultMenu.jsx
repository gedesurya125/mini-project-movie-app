import { 
  Menu
 } from '@material-ui/core'
import React from 'react'

const DefaultMenu = ({anchorEl, open, onClose, children}) => {
  return (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      anchorEl={anchorEl}
      keepMounted
      open = {open}
      onClose = {onClose}
    >
      {children}
    </Menu>
  )
}

export default DefaultMenu
