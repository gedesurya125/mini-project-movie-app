import React from 'react';
import { Divider, ListItemIcon, 
  ListItemText, 
  MenuItem,
  Typography
 } from '@material-ui/core';
import DefaultMenu from '../commons/DefaultMenu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router';
import {useDispatch, useSelector} from 'react-redux'
import { logOutUser } from '../../redux/actions/userAction';
const UserMenu = ({open, onClose, anchorEl}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const handleSignOut = () => {
    dispatch(logOutUser());
    onClose();
    history.push("/");
  }

  const handleProfileOpen = () =>{
    onClose();
    history.push('/user/profile/1');
  }


  return (
    <DefaultMenu open={open} onClose={onClose} anchorEl={anchorEl}> 
      <Typography variant="h6" align="center">{user.user_name}</Typography>
      <Divider/>
      <MenuItem onClick={handleProfileOpen}>
        <ListItemIcon>
          <AccountCircleIcon/>
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SettingsIcon/>
        </ListItemIcon>
        <ListItemText>Setting</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ContactSupportIcon/>
        </ListItemIcon>
        <ListItemText>Help</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleSignOut}>
        <ListItemIcon>
          <ExitToAppIcon/>
        </ListItemIcon>
        <ListItemText>Sign Out</ListItemText>
      </MenuItem>
    </DefaultMenu>
  )
}

export default UserMenu
