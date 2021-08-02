import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EditUserModal from '../components/EditUserModal'
import { useHistory } from 'react-router-dom'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    // margin: theme.spacing(2, 0),
  },
  userBox: {
    padding: theme.spacing(10, 0),
  },
  cardUser: {
  },
  cardContent: {
    textAlign: 'center',
    width: theme.spacing(35)
  },
  userAvatar: {
    height: theme.spacing(15),
    width: theme.spacing(15),
    margin: theme.spacing(2, 'auto')
  },
  userName: {
    fontWeight: theme.typography.fontWeightBold
  },
  actionButton: {
    marginTop: theme.spacing(4),
    '& .MuiButton-root':{
      width: theme.spacing(15),
    },
    '& .MuiButton-root:first-child':{
      marginRight: theme.spacing(1)
    }
  }
}))

const UserProfilePage = () => {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false)
  const user = useSelector(state => state.user);
  const classes = useStyles()

  const toggleModalOpen = () => {
    setOpenModal(state => !state)
  }
  return (
    <div>
      <Container className={classes.root}>
        <Box className={classes.userBox} display="flex" flexDirection="column" alignItems="center">
          <Card className={classes.cardUser} elevation={3}>
            <CardContent className={classes.cardContent}>
              <Avatar alt={user.user_name} src={user.image} className={classes.userAvatar} />
              <Typography className={classes.userName} variant="h4">{user.user_name}</Typography>
              <Typography>{user.full_name}</Typography>
              <Typography>{user.email}</Typography>
              <Typography>id : {user.id}</Typography>
              <div className={classes.actionButton}>
                <Button onClick={toggleModalOpen} variant="contained" color="primary">Edit Data</Button>
                <Button
                  onClick={() => history.push('/')}
                  variant="contained"
                  color="secondary">Back</Button>
              </div>
            </CardContent>
          </Card>
        </Box>

        <EditUserModal openModal={openModal} toggleModalOpen={toggleModalOpen} />
      </Container>
    </div>
  )
}

export default UserProfilePage
