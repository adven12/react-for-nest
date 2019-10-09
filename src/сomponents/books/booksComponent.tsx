import React from "react";
import { BooksState, BooksRequest } from "../../redux/books/types";
import BooksComponentModal from "./booksComponentModal"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Modal, Grid, TextField } from "@material-ui/core";
import { DebounceInput } from 'react-debounce-input';
import { Redirect } from "react-router-dom";
import { Link, LinkProps } from "react-router-dom";
import { loadState } from "../../redux/localStorage";
import no_picture from "../../img/no_picture.png"; 


const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref as any} {...props} />
));

export interface BooksProps {
  doBooks: () => object;
  doBooksToBasket: (data: BooksRequest) => object;
  doBooksUpdate: (data: BooksRequest,allBooks:BooksRequest) => object;
  isLog: boolean,
  dataProducts: string,
  data: [],
}

class BooksComponent extends React.Component<any, any> {
  state: BooksState = {
    dataProducts: "",
    book: "",
    dataArr: [],
    search: "",
    numberBooks: 1,
    countBooks: 0,
  };


  handleBuy = (book:any) => {
      const { doBooksToBasket } = this.props;
      doBooksToBasket(book);
      
    const localParce = loadState();
     //upload new data in localStorage            
     localStorage.setItem('state',JSON.stringify(localParce));     
  }

  handleDel = (id: any) => { 
    const { doBooksUpdate } = this.props;
    doBooksUpdate(id, this.props.dataProducts );
  };

  render() {
     console.log(this.props.dataProducts);
     console.log(this.props.data);

    if (this.props.dataProducts.length <= 0 ) {
      const { doBooks } = this.props;
      doBooks(); 
    }
    console.log(this.props.dataProducts);
    
    return (
      <div className="booksComponent">
        {this.props.isLog ? 
        (
        <div className="booksComponent-list ">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DebounceInput
                minLength={2}
                debounceTimeout={300}
                onChange={event => this.setState({ search: event.target.value })} />
              <p>Value: {this.state.search}</p>
            </Grid>
          </Grid>
          {this.props.isLog && this.props.dataProducts.length > 0 ?
            (
              this.props.dataProducts.map((text: any, index: any) => (
                text.name.includes(this.state.search) ? (
                  <div className="booksComponent-books" key={index}>
                    <Card className="booksComponent-books-card" >
                      <CardContent>
                        <CardMedia
                          className="booksComponent-books-card-media"
                          image={no_picture}
                          title="Paella dish"
                          id={text._id}
                          component={AdapterLink} to={{
                            pathname: `/description/${text._id}`,
                            // state: {
                            //   id: text.id,
                            //   name: text.name,
                            //   picture: text.picture,
                            //   full_discript: text.full_discript,
                            //   discript: text.discript,
                            // }
                          }}
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
                      <CardActions>
                        {this.props.data.isAdmin ===  'admin' ? (
                            <div>
                              <Button size="small" onClick={() => this.handleDel(text._id)}>Del</Button>
                            </div>
                          ) : (<Button size="small" onClick={() => this.handleBuy(text)} id={text.id}>Buy</Button>)
                        }</CardActions>
                    </Card>
                  </div>
                ) : (null)
              )
              )
            ) : (null)
          }
          <br />
          {this.props.data.isAdmin ===  'admin' ? (
              <BooksComponentModal />
            ) : (null)
          }
        </div>
        ) : (<Redirect to="/login"/>)
        }
      </div>
    );
  }
}
export default BooksComponent;

