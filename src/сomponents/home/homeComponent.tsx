import React from "react";
import avatar from "../../img/avatar.png";
import HomeComponentModal from "./homeComponentModal";

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Redirect } from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    root: {
      width: '100%',
      maxWidth: 500,
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 120,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);


export interface HomeProps {
  isLog: boolean,
  error: string,
  dataL: any,
  dataH: any,
}

const HomeComponent: React.FC<HomeProps> = (props: any) => {
 
  const classes = useStyles();

  let defoltPhoto:any
  // defoltPhoto = dataL.userData.avatar;
  if (defoltPhoto === '' || defoltPhoto === undefined || defoltPhoto === 'no_photo') {
    defoltPhoto = avatar
  }  
  
  if(props.dataH !== ''){  
  let test = JSON.stringify(props.dataH);
  localStorage.setItem('state',test);
  }
 console.log(props.dataH);
 console.log(props.dataL);
 
  return (
    <div className="homeComponent">

      {props.isLog ?
        (
          <div className="homeComponent-user">
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image} >
                      <img className={classes.img} alt="avatar" src={defoltPhoto} id="photo" />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid container alignItems="center" justify="center" direction="row">
                        <Typography variant="button" display="block">
                          Welcome to the site!
                        </Typography>
                      </Grid>

                      <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                          id="user-name"
                          label="Your name"
                          className={classes.textField}
                          value={props.dataL.firstName}
                          margin="normal"
                          variant="outlined"
                        />
                        <TextField
                          id="user-email"
                          label="E-mail"
                          className={classes.textField}
                          value={props.dataL.username}
                          margin="normal"
                          variant="outlined"
                        />
                      </form>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center" justify="flex-start" direction="row">
                    <HomeComponentModal />
                  </Grid>
                </Grid>
              </Paper>
            </div>

          </div>

        ) : (<Redirect to="/login" />)
      }
    </div>

  );
}
export default HomeComponent;



