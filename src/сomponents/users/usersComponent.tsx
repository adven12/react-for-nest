import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export interface UsersProps {
  doUsers: () => object;
  isLog: boolean,
  error: string,
  dataUsers: any,
  data: any
}


const UsersComponent: React.FC = (props: any) => {
  const classes: any = useStyles();
  console.log("sfdvdsvfd");
  
  console.log(props.data);
  console.log(props.dataUsers);
  return (
    <div className="usersComponent">
      {props.data.permissions.map ((item:any, index:any) => (       
        item === "admin" ? (
        props.dataUsers ? (
          <div key={index}>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Id</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Username</TableCell>
                    <TableCell align="right">Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {/* roleId */}
                  {props.dataUsers.map((text: any, index: any) => (
                    <TableRow key={index}>
                      <TableCell align="left">{text._id}</TableCell>
                      <TableCell align="right">{text.firstName}</TableCell>
                      <TableCell align="right">{text.username}</TableCell>
                      {text.roleId.map((text: any, index: any) => (
                      <TableCell align="right" key={index}>{text.roleName} </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        ) : null

        ) : (<Redirect to="/login" />)))
      }
    </div>
  );
}
export default UsersComponent;

