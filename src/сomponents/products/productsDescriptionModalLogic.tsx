import React from "react";
import { DescriptionModalState,  ProductsRequest } from "../../redux/products/types";
import { connect } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { doProductChange } from "../../redux/products/actions";


const mapStateToProps = (state: RootState) => ({

});
export interface DescriptionModalProps {
    product: any;
    handleClose: Function;
    doProductChange: (data:ProductsRequest,id:ProductsRequest) => object;
  }
 class ProductsDescriptionModalLogic extends React.Component<DescriptionModalProps, DescriptionModalState> {
   [x: string]: any;
    state: DescriptionModalState = {
        product: "",
        full_descript: "",
      };
      
     handle = (event: any) =>{
        this.setState({ [event.target.name]: event.target.value } as any);
     }
    add = ():any => {
        let full_descript:any = document.querySelector('#new_full_descript');    
        this.props.product.full_descript =  full_descript.value 
        const { doProductChange } = this.props;
        doProductChange(this.props.product,this.props.product._id)

        this.props.handleClose();
    };

    render(){
      console.log(this.props.product);

        return(
            <div className="homeLogic">
            <textarea 
              id="new_full_descript"
              className="homeLogic-input"
              name="full_descript"
              placeholder="Product description..."
              value={this.state.full_descript}
              onChange={this.handle}
            ></textarea>
            <br/>
            <button onClick={() => this.add()} className="homeLogic-button">Add new Description</button>
           </div>
        );
    }
}
export default connect(
  mapStateToProps,
  { doProductChange }
)(ProductsDescriptionModalLogic);
