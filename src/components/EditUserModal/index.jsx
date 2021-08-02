import { Typography } from '@material-ui/core'
import React from 'react'
import DefaultModal from '../commons/DefaultModal';
import EditUserForm from './depedencies/EditUserForm';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  modalTitle: {
    fontWeight: theme.typography.fontWeightBold
  }
}))

const EditUserModal = ({ openModal, toggleModalOpen }) => {
  const classes = useStyle();
  return (
    <DefaultModal openModal={openModal} toggleModalOpen={toggleModalOpen}>
      <div>
        <Typography className={classes.modalTitle} align="center" variant="h5">Edit Data</Typography>
        <EditUserForm/>
      </div>
    </DefaultModal>
  )
}

export default EditUserModal
