import React from "react";
import { BasketState } from "../../redux/basket/types";
import { makeStyles ,Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {CardMedia, Card, CardContent } from "@material-ui/core";
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
  allBooks: string,
  currentBook: string,
  basketBooks: any,
//   numberBooks: number,
//   countBooks: number,

}

class OrderComponent extends React.Component<any, any> {
//   const state:BasketState = { 
//     countBooks: 0,
//     numberBooks: 1,
//   };
//   const classes = useStyles();

//   const mBook = (book:any) => {
//     const { cleanOneBasket } = props;
//     cleanOneBasket(book,props.numberBooks);        
//   }
//   const pBook = (book:any) => {
//     const { AddOneBasket } = props;
//     AddOneBasket(props.numberBooks, props.countBooks, book );        
//   }

//   const cleanBasket = () =>{
//     const { cleanAllBasket } = props;
//     cleanAllBasket();    
   
//   }
//   const sumBooks = () =>{
//   props.basketBooks.map((item:any) => (
//   state.countBooks = Number(Number(state.countBooks) + (Number(item.price) * Number(item.quantity))))
//   )
// return state.countBooks
// }
render() {
console.log(this.props.basketBooks);

  return (
      <div className="booksComponent">
        <div className="booksComponent-list ">
        {this.props.basketBooks.length > 0 ? (
         this.props.basketBooks.map((text: any, index: any) => (
            <div className="booksComponent-books" key={index}>
                    <Card className="booksComponent-books-card" >
                      <CardContent>
                        <CardMedia
                          className="booksComponent-books-card-media"
                          image={no_picture}
                          title="Paella dish"
                          id={text._id}
                        />
                        <Typography component="h6">
                          {text.name}
                        </Typography>
                        <Typography color="textSecondary">
                          {text.price}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {text.descript}
                          <br />
                        </Typography>
                      </CardContent>
                    </Card>
            </div>   
         ))
        //  (<Button>BUY ALL</Button>)

        ):(null)}
        </div>
       </div> 
    );
}
}
export default OrderComponent;



