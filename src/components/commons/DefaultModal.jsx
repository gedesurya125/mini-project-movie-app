import React from 'react';
import {
  Paper,
  Modal, 
  Backdrop, 
  makeStyles, 
  Fade 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    width: theme.spacing(38)
  }

}));

const DefaultModal = ({ openModal, onCloseAction, children }) => {
  const classes = useStyles();


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={onCloseAction}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div>
            <Paper className={classes.paper}>
              {children}
            </Paper>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default DefaultModal;