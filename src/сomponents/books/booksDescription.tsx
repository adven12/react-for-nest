import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { RootState } from '../../redux/rootReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Modal } from '@material-ui/core';
import BooksDescriptionModalLogic from './booksDescriptionModalLogic';
import no_picture from "../../img/no_picture.png"; 


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
      margin: "110px auto",
      position: 'absolute',
      maxWidth: 270,
      maxHeight: 270,
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);
const mapStateToProps = (state: RootState) => ({
  dataProducts: state.books.dataProducts,
  data: state.login.data
});
export interface BooksProps {
  isLog: boolean,
}

const BooksDescription: React.FC<any> = (props) => {

  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div className="booksDescription">
     {props.isLog || props.isLog == undefined ? (
     props.dataProducts.map((item:any, index:any) => (
     props.match.params.id == item._id ? (
      <div key={index}>
      <div>
     <Card className="booksComponent-books-card" >
     <CardContent>
     <CardMedia
          className="booksComponent-books-card-media"
          image={no_picture}
          title="Paella dish"
          id={item._id}
        />
        <Typography component="h6">
        {item.name}
        </Typography>
        <div>
        {item.full_descript != undefined ?
        (<Typography component="h6">{item.full_descript}</Typography>) :
        (<Typography component="h6">{item.descript}</Typography>)}
        </div>
     </CardContent>
      </Card>
      </div>
      <div>
      <br/>
      {props.data.permissions.map((item:any, index:any) => (    
      item ===  "admin" ? (
      <Button size="small" onClick={handleOpen}>Сhange Description</Button>
      ): (null)))
      }
       <Modal className={classes.location}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
        <div  className={classes.paper}>
        <h3 id="simple-modal-title">Enter a new description</h3>
        <div id="simple-modal-description">
          <BooksDescriptionModalLogic product={item} handleClose={handleClose}/>
        </div>
        </div>
        </Modal>
      </div>
      </div>

     ) : (null)
     ))
     ):(<Redirect to="/login"/>)}

    </div>
  );
}
export default connect(
  mapStateToProps,
)(BooksDescription);
