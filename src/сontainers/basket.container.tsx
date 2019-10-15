import { RootState } from "../redux/rootReducer";
import  BasketComponent   from "../сomponents/basket/basketComponent";
import { connect } from "react-redux";
import { cleanAllBasket, cleanOneBasket, AddOneBasket } from "../redux/basket/actions";
import {  doOrder } from "../redux/order/actions";

const mapStateToProps = (state: RootState) => ({
  allBooks: state.books.dataProducts,
  currentBook: state.books.book,
  basketBooks: state.books.dataArr,
  numberBooks: state.books.numberBooks,
  countBooks: state.books.countBooks,
});

export default connect(
  mapStateToProps,
  { cleanAllBasket, cleanOneBasket, AddOneBasket, doOrder}
)(BasketComponent);