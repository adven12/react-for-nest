import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import OrderComponent from "../сomponents/order/orderComponent";

const mapStateToProps = (state: RootState) => ({
data: state.login.data,
allOrders: state.orders.allOrders,
});

export default connect(
  mapStateToProps,
)(OrderComponent);