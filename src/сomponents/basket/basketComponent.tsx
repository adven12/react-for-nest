import React from "react";
import { BasketState } from "../../redux/basket/types";
import { makeStyles ,Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {CardMedia } from "@material-ui/core";
import no_picture from "../../img/no_picture.png";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    container: {
      display: 'flex',
      textAlign: 'center',
    },
    media: {
      paddingTop: '30%', 
      width: '90px',
      hight: '40px',
      margin: 'auto',
    },
    button: {
    marginTop: '17px',
    marginRight: '40px',
    },
    sumTotal: {
       textAlign: 'left',
       marginTop: '45px',
      },
      vanish: {
       display: 'none',
      }  

  }),
);

export interface BasketProps {
  cleanAllBasket: () => object;
  cleanOneBasket: (data:any,numberBooks:any) => object;
  AddOneBasket: (numberBooks:any,countBooks:number, book:any) => object;
  doOrder: (basketBooks:any) => object;
  handleClose: Function; 
  allBooks: string,
  currentBook: string,
  basketBooks: any,
  numberBooks: number,
  countBooks: number,

}

const  BasketComponent: React.FC<BasketProps> = (props:any) => {
  const state:BasketState = { 
    countBooks: 0,
    numberBooks: 1,
  };
  const classes = useStyles();

  const mBook = (book:any) => {
    const { cleanOneBasket } = props;
    cleanOneBasket(book,props.numberBooks);        
  }
  const pBook = (book:any) => {
    const { AddOneBasket } = props;
    AddOneBasket(props.numberBooks, props.countBooks, book );        
  }

  const cleanBasket = () =>{
    const { cleanAllBasket } = props;
    cleanAllBasket();    
   
  }
  const sumBooks = () =>{
  props.basketBooks.map((item:any) => (
  state.countBooks = Number(Number(state.countBooks) + (Number(item.price) * Number(item.quantity))))
  )
return state.countBooks
}

const userOrder = () =>{
  const { doOrder } = props;
  const local: any = localStorage.getItem('state');
  const localParce:any = JSON.parse(local);
  const idCurrentUser = localParce.login.data.id;
  const allBooks:any = props.basketBooks
  
  allBooks.map((item:any) => {
  item['user_id'] = idCurrentUser
  item['book_id'] =  item['_id']
  delete item['_id']
  }
  )  
  
  doOrder(allBooks);   
  props.handleClose();     
}

  return (
      <div className="basketComponent">
        {props.currentBook === undefined ? (
          <div className="empty">
          <h2>Basket is empty</h2>
          </div>
        ) : (
        props.basketBooks.map((textArr:any) => (
           
        props.allBooks.map((text:any, index:any) => (
        textArr._id === text._id ?(   
        <div className="basketComponent-content" key={index}>
        <Grid container spacing={2}>
        <Grid item  xs={2}>
        <Button className={classes.button} onClick={() => mBook(text)}>-</Button>
        </Grid> 
        <Grid item  xs={7}>
        <CardMedia
            className={classes.media} image={no_picture} title="Paella dish" />
        <Typography  component="h6">
        {text.name}
        </Typography>
        <Typography  component="h6">
        {text.price}
        </Typography> 
        </Grid>  
        <Grid item  xs={3}>    
        <Button className={classes.button} onClick={() => pBook(text)}>+</Button>
        <Typography  component="h6" id="numberBooks">
         {textArr.quantity}
        </Typography>  
        </Grid>
        </Grid>   
        <hr/>
        </div>
        ) : (null))
        
        
        )

        )))} 
       <div className="basketComponent-footer">
       <Typography  component="h6" className={classes.sumTotal}>
        Sum products: {sumBooks()}
        </Typography> 
        <Button onClick={() => cleanBasket()}>cleanBasket</Button><br />
        <Button onClick={() => userOrder()}>Place your order</Button> 
        </div>

       </div> 
    );
}
export default BasketComponent;



