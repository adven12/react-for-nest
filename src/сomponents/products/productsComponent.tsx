import React from "react";
import { ProductsState, ProductsRequest } from "../../redux/products/types";
import ProductsComponentModal from "../products/productsComponentModal"
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

export interface ProductsProps {
  doProducts: () => object;
  doProductsToBasket: (data: ProductsRequest) => object;
  doProductsUpdate: (data: ProductsRequest,allBooks:ProductsRequest) => object;
  isLog: boolean,
  dataProducts: string,
  data: [],
}

class ProductComponent extends React.Component<any, any> {
  state: ProductsState = {
    dataProducts: "",
    book: "",
    dataArr: [],
    search: "",
    numberBooks: 1,
    countBooks: 0,
  };


  handleBuy = (book:any) => {
      const { doProductsToBasket } = this.props;
      doProductsToBasket(book);
      
    const localParce = loadState();
     //upload new data in localStorage            
     localStorage.setItem('state',JSON.stringify(localParce));     
  }

  handleDel = (id: any) => { 
    const { doProductsUpdate } = this.props;
    doProductsUpdate(id, this.props.dataProducts );
  };

  render() {
     console.log(this.props.dataProducts);
     console.log(this.props.data);

    if (this.props.dataProducts.length <= 0 ) {
      const { doProducts } = this.props;
      doProducts(); 
    }
    console.log(this.props.dataProducts);
    
    return (
      <div className="productsComponent">
        {this.props.isLog ? 
        (
        <div className="productsComponent-list ">
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
                  <div className="productsComponent-books" key={index}>
                    <Card className="productsComponent-books-card" >
                      <CardContent>
                        <CardMedia
                          className="productsComponent-books-card-media"
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
                        {this.props.data.permissions.map((item:any, index:any) => (    
                        item ===  "admin" ? (
                            <div>
                              <Button size="small" onClick={() => this.handleDel(text._id)}>Del</Button>
                            </div>
                          ) : (<Button size="small" onClick={() => this.handleBuy(text)} id={text.id}>Buy</Button>)))
                        }</CardActions>
                    </Card>
                  </div>
                ) : (null)
              )
              )
            ) : (null)
          }
          <br />
          {this.props.data.permissions.map((item:any, index:any) => (    
            item ===  "admin" ? (
              <ProductsComponentModal />
            ) : (null)))
          }
        </div>
        ) : (<Redirect to="/login"/>)
        }
      </div>
    );
  }
}
export default ProductComponent;

