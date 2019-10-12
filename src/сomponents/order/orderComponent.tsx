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
  allOrders: any[],
  data: any[]
}


const OrderComponent: React.FC = (props: any) => {
  const classes: any = useStyles();

  return (
    <div className="usersComponent">
      {props.data.isAdmin === 'admin' ? (
        props.allOrders ? (
          <div>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Id</TableCell>
                    <TableCell align="left">User_id</TableCell>
                    <TableCell align="left">Book_id</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Descript</TableCell>
                    <TableCell align="right">Full_Descript</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.allOrders.map((item: any, index: any) => (
                    <TableRow key={index}>
                      <TableCell align="left">{item.id}</TableCell>
                      <TableCell align="right">{item.user_id}</TableCell>
                      <TableCell align="right">{item.book_id}</TableCell>
                      <TableCell align="right">{item.name}</TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                      <TableCell align="right">{item.descript}</TableCell>
                      <TableCell align="right">{item.full_descript}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        ) : null

        ) : (<Redirect to="/login" />)
      }
    </div>
  );
}
export default OrderComponent;

