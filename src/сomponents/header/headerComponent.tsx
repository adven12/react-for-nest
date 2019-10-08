import React from "react";
import { Link, Redirect } from "react-router-dom";
import avatar from "../../img/avatar.png";
import basket from "../../img/basket.png";
import BasketContainer from "../../сontainers/basket.container"
import jwt_decode  from "jwt-decode"
import Badge from '@material-ui/core/Badge';
import { createStyles, makeStyles, Theme, Modal } from "@material-ui/core";


export interface HeaderProps {
  doLogout: () => object;
  isLog: boolean,
  data: any,
  basketBooks: any,
  token: string,
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    location: {
      display: 'flex',
      margin: "110px auto",
      position: 'absolute',
      maxWidth: 'auto',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 4, 1),
    },
    margin: {
      margin: theme.spacing(2),
    },
    padding: {
      padding: theme.spacing(0, 2),
    },
    badge: {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
    primary: {
      color: '#000',
    },
  }),
);

const HeaderComponent: React.FC = (props: any) => {
  
  const classes = useStyles();
  let defoltPhoto = '';
  let sum = 0;
 
  // if (data.userData.role != "admin") {
  //   defoltPhoto = data.userData.avatar;
  //   if (defoltPhoto === '' || defoltPhoto === undefined || defoltPhoto === 'no_photo') {
      defoltPhoto = avatar
  //   }
  // }

  function sumQuantity() {
    props.basketBooks.map((book: any) => {
      sum = sum + book.quantity;
    })
    return sum;
  }

  function logout() {
    localStorage.clear();
    const { doLogout } = props;
    doLogout();
    // window.location.href = "/login";
  }

  const [open, setOpen] = React.useState(false);
  function handleOpen(event: any) {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="headerComponent">
      {(!props.isLog) ?
        (
          <header className="headerComponent-header">
            <Redirect to="/login"/>
            <Link className="headerComponent-link" to="/login">Login</Link>
            <Link className="headerComponent-link" to="/Registration">Registration</Link>
          </header>
        ) : (
          props.data.isAdmin === true ?
            (
              <div>
                <header className="headerComponent-header">
                  <Link className="headerComponent-link" to="/users">Users</Link>
                  <Link className="headerComponent-link" to="/books">Books</Link>
                  <Link onClick={() => logout()} className="headerComponent-link " to="/login">Logout</Link>
                </header>
              </div>

            ) : (
              <header className="headerComponent-header">
                <img src={defoltPhoto} alt="avatar" id="photoMin" className="headerComponent-img" />
                <Badge badgeContent={sumQuantity()}>
                  <img src={basket} alt="basket" id="basket" className="headerComponent-img" aria-controls="simple-menu" aria-haspopup="true" onClick={(e: any) => handleOpen(e)} />
                </Badge>
                <Modal className={classes.location}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={open}
                  onClose={handleClose}
                >
                  <div className={classes.paper}>
                    <h3 id="simple-modal-title">Basket</h3>
                    <div id="simple-modal-description">
                      <BasketContainer />
                    </div>

                  </div>
                </Modal>

                <Link className="headerComponent-link" to="/home">Home</Link>
                <Link className="headerComponent-link" to="/books">Books</Link>
                <Link onClick={() => logout()} className="headerComponent-link headerComponent-a" to="/">Logout</Link>
              </header>
            )   )

      }


    </div>

  );
}
export default HeaderComponent;
