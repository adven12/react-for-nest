import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import  HomeLogic  from './homeLogic';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 4, 1),
    },
    location: {
      display: 'flex',
      margin:"110px auto",
      position: 'absolute',
      maxWidth: 270,
      maxHeight: 270,
    },
    button: {
        margin: theme.spacing(1),
      },
  }),
);

const HomeComponentModal: React.FC<any> = () => {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} size='medium' component="span" className={classes.button}>Editing profile</Button>
      <Modal className={classes.location}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div  className={classes.paper}>
          <h3 id="simple-modal-title">Enter new name or email</h3>
          <div id="simple-modal-description">
            <HomeLogic handleClose = {handleClose}
            />
          </div>

        </div>
      </Modal>
    </div>
  );
}
export default HomeComponentModal;