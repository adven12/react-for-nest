import { RootState } from "../redux/rootReducer";
import  BasketComponent   from "../сomponents/basket/basketComponent";
import { connect } from "react-redux";
import { cleanAllBasket, cleanOneBasket, AddOneBasket } from "../redux/basket/actions";

const mapStateToProps = (state: RootState) => ({
  allBooks: state.products.dataProducts,
  currentBook: state.products.book,
  basketBooks: state.products.dataArr,
  numberBooks: state.products.numberBooks,
  countBooks: state.products.countBooks,
});

export default connect(
  mapStateToProps,
  { cleanAllBasket, cleanOneBasket, AddOneBasket}
)(BasketComponent);