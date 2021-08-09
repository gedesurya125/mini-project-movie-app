import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import { openModalUpdateUser } from '../redux/actions/modalAction'
import { sourceUrl } from '../redux/Api/setupAPI'

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
  // const [openModal, setOpenModal] = useState(false)
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  // const {modalUpdateUser} = useSelector(state => state.modals);
  // console.log('ini status untuk modal upate user',modalUpdateUser);
  const classes = useStyles()

  const openModal = () => {
    dispatch(openModalUpdateUser());
  }
  return (
    <div>
      <Container className={classes.root}>
        <Box className={classes.userBox} display="flex" flexDirection="column" alignItems="center">
          <Card className={classes.cardUser} elevation={3}>
            <CardContent className={classes.cardContent}>
              <Avatar alt={user.user_name} src={sourceUrl+user.image} className={classes.userAvatar} />
              <Typography className={classes.userName} variant="h4">{user.username}</Typography>
              <Typography>{user.fullname}</Typography>
              <Typography>{user.email}</Typography>
              <Typography>id : {user.id}</Typography>
              <div className={classes.actionButton}>
                <Button onClick={openModal} variant="contained" color="primary">Edit Data</Button>
                <Button
                  onClick={() => history.push('/')}
                  variant="contained"
                  color="secondary">Back</Button>
              </div>
            </CardContent>
          </Card>
        </Box>

        {/* <EditUserModal openModal={openModal} toggleModalOpen={toggleModalOpen} /> */}
        <EditUserModal/>

      </Container>
    </div>
  )
}

export default UserProfilePage
