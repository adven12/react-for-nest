import React from "react";
import { BooksModalState} from "../../redux/books/types";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { RootState } from "../../redux/rootReducer";
import no_picture from "../../img/no_picture.png"; 
import { doBooks, createBooks } from "../../redux/books/actions";

export interface BooksModalProps {
    doBooks: () => object;
    createBooks: (data:any) => object;
    changePhoto: string;
    handleClose: Function;
  }
  const mapStateToProps = (state:RootState) => ({
    changePhoto: state.books.dataProducts,
  });
 class BooksComponentModalLogic extends React.Component<BooksModalProps, BooksModalState> {
   [x: string]: any;
    state: BooksModalState = {
        picture: "", 
        name: "",
        descript: "",
        price: 0,
        full_descript: "",
      };
     
      no_picturePhoto:any = no_picture
     handle = (event: any) =>{
        this.setState({ [event.target.name]: event.target.value } as any);

    }
    add = ():any => {     
        let addName:any = document.querySelector('#new_name');
        let addDescript:any = document.querySelector('#new_descript');
        let addPrice:any = document.querySelector('#new_price');
        let addFull_descript:any = document.querySelector('#new_full_descript');
        addName.value = this.state.name;
        addDescript.value = this.state.descript;
        addPrice.value = this.state.price;
        addFull_descript.value = this.state.full_descript;
        
        const newSave = {
            name: this.state.name,
            descript: this.state.descript,
            price: Number(this.state.price),
            picture: this.state.picture,
            full_descript: this.state.full_descript,
        };
        if(newSave.picture === "" || this.state.picture === undefined){
          newSave.picture = this.no_picturePhoto;
        }       
       
          const { createBooks } = this.props;
          createBooks(newSave);
          const { doBooks } = this.props;
          doBooks(); 
          this.props.handleClose();
    };


    handlePicture = () =>{
            let defaultPhoto = this.no_picturePhoto
            
            const toBase64 = (file:any) => new Promise((resolve, reject) => {
                const reader = new FileReader();
                console.log("*** ",file);
                reader.readAsDataURL(file);              
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
              
            });
            async function Main(){
               const input : any = (document.querySelector('#upload_picture'));
               const file : any = input ? input.files[0] : null;
                if(!file){
                    return defaultPhoto
                }
                return await toBase64(file)
            }           
            Main().then(res =>{
                  this.setState({picture: res})
            })
    }
          

    render(){
      console.log(this.props.changePhoto);
        return(
            <div className="homeLogic">
             <input
              id="new_name"
              className="homeLogic-input"
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handle}
            />
            <input
              id="new_descript"
              className="homeLogic-input"
              type="text"
              name="descript"
              value={this.state.descript}
              onChange={this.handle}
            />
            <input
              id="new_price"
              className="homeLogic-input"
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handle}
            />
            <textarea 
              id="new_full_descript"
              className="homeLogic-input"
              name="full_descript"
              placeholder="Detailed product description"
              value={this.state.full_descript}
              onChange={this.handle}
            ></textarea>

            <Button  size="small" className="homeLogic-input">
                <input id="upload_picture" type="file" className="homeLogic-input-upload"/>
            </Button>
            <Button  size="small" component="span" className="homeLogic-input" onClick={() => this.handlePicture()}>
                Add picture
            </Button>
            <br/>
            <button onClick={() => this.add()} className="homeLogic-button">Add product</button>
           </div>
        );
    }
}
export default connect(
    mapStateToProps,
    { doBooks, createBooks }
  )(BooksComponentModalLogic);