import React from "react";
import { doHomeChange } from "../../redux/home/actions";
import { HomeLogicState, HomeModalRequest } from "../../redux/home/types";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import avatar from "../../img/avatar.png";
import { RootState } from "../../redux/rootReducer";
import jwt_decode from "jwt-decode";



export interface HomeLogicProps {
  doHomeChange: (data: HomeModalRequest, id:HomeModalRequest) => object;
  data: any;
  handleClose: Function; 
}
const mapStateToProps = (state: RootState) => ({
  data: state.home.data,
});

class HomeLogic extends React.Component<HomeLogicProps, HomeLogicState> {
  [x: string]: any;
  state: HomeLogicState = {
    email: "",
    name: "",
    changePhoto: "no_photo",
  };
  avatarPhoto: any = { avatar }

  


  handle = (event: any) => {
    this.setState({ [event.target.name]: event.target.value } as any);

  }
  edit = (): any => {
    // change inputs from homeComponent
    let editName: any = document.querySelector('#user-name');
    let editEmail: any = document.querySelector('#user-email');

    editName.value = this.state.name;
    editEmail.value = this.state.email;

    const newSave = {
      firstName: this.state.name,
      username: this.state.email,
      avatar: this.state.changePhoto,
    };
    const local: any = localStorage.getItem('state')
    const localParce = JSON.parse(local)
    console.log(localParce.login.data);
  
    for (var key in localParce.login.data) {
      if (key === 'username') {
        if (newSave.username != '') {
          localParce.login.data[key] = newSave.username
        }
      }
      if (key === 'firstName') { 
        if (newSave.firstName != '') {
          localParce.login.data[key] = newSave.firstName
        }
      }
      if (key === 'avatar') {
        localParce.login.data[key] = newSave.avatar
      }
    }
    
    let userId = localParce.login.data.id;
   
    let imgMin: any = document.querySelector('#photoMin');
    let img: any = document.querySelector('#photo');

    if (this.state.changePhoto == 'no_photo') {
      imgMin.src = this.avatarPhoto.avatar;
      img.src = this.avatarPhoto.avatar;
      console.log(this.avatarPhoto);
    } else {
      imgMin.src = this.state.changePhoto;
      img.src = this.state.changePhoto;
    }
    const { doHomeChange } = this.props;
    
    doHomeChange(localParce.login.data, userId);
    this.props.handleClose();
  }


  savePhotoProfile = () => {
    let defaultPhoto = this.avatarPhoto.avatar;
    let img: any = document.querySelector('#photo');

    const toBase64 = (file: any) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      console.log("*** ", reader);
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
    async function Main() {
      const input: any = (document.querySelector('#upload_img'));
      const file: any = input ? input.files[0] : null;

      if (!file) {
        return defaultPhoto
      }
      return await toBase64(file)
    }
    Main().then(res => {
      this.setState({ changePhoto: res })
      img.src = res;
    })
  }
 
  render() {

      return (
      <div className="homeLogic">
        <input
          id="edit_name"
          className="homeLogic-input"
          type="name"
          name="name"
          value={this.state.name}
          onChange={this.handle}
        />
        <input
          id="edit_email"
          className="homeLogic-input"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handle}
        />
        <Button size="small" className="homeLogic-input">
          <input id="upload_img" type="file" placeholder="Choose avatar" className="homeLogic-input-upload" />
        </Button>
        <Button size="small" component="span" className="homeLogic-input" onClick={() => this.savePhotoProfile()}>Upload avatar</Button>
        <br />
        <button onClick={() => this.edit()} className="homeLogic-button">Сhange profile</button>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  { doHomeChange }
)(HomeLogic);