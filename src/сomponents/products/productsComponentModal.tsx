import React from "react";
import { Modal, Button } from "@material-ui/core";
import { makeStyles} from '@material-ui/core/styles';
import ProductsComponentModalLogic from "./productsComponentModalLogic";

const useStyles = makeStyles(theme => ({
    location: {
      display: 'flex',
      margin:"110px auto",
      position: 'absolute',
      maxWidth: 270,
      maxHeight: 400,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 4, 1),
    },
    container: {
      display: 'flex',
      textAlign: 'center',
    },
    button: {
        margin: '0 auto',
    },
  }));

const ProductsComponentModal: React.FC = (props:any) => {

    const classes:any = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

return (
    <div className="ProductsComponentModal">
    <Button size="small" className={classes.button} onClick={handleOpen}>Add new product</Button>
    <Modal className={classes.location}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={open}
    onClose={handleClose}
  >
  <div  className={classes.paper}>
  <h3 id="simple-modal-title">New product</h3>
  <div id="simple-modal-description">
    <ProductsComponentModalLogic handleClose={handleClose}/>
  </div>

  </div>
  </Modal>
  </div>
);
}
export default ProductsComponentModal;