import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import OrderComponent from "../сomponents/order/orderComponent";
// import { cleanAllBasket, cleanOneBasket, AddOneBasket } from "../redux/basket/actions";

const mapStateToProps = (state: RootState) => ({
basketBooks: state.books.dataArr,
allBooks: state.books.dataProducts,
});

export default connect(
  mapStateToProps,

)(OrderComponent);