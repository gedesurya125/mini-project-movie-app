import { Typography } from '@material-ui/core'
import React from 'react'
import DefaultModal from '../commons/DefaultModal';
import EditUserForm from './depedencies/EditUserForm';
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalUpdateUser } from '../../redux/actions/modalAction';

const useStyle = makeStyles(theme => ({
  modalTitle: {
    fontWeight: theme.typography.fontWeightBold
  }
}))

const EditUserModal = () => {
  const {modalUpdateUser} = useSelector(state => state.modals);
  const dispatch = useDispatch()
  const classes = useStyle();

  const handleCloseModal = () => {
    dispatch(closeModalUpdateUser());
  }
  return (
    <DefaultModal openModal={modalUpdateUser} onCloseAction={handleCloseModal}>
      <div>
        <Typography className={classes.modalTitle} align="center" variant="h5">Edit Data</Typography>
        <EditUserForm/>
      </div>
    </DefaultModal>
  )
}

export default EditUserModal
