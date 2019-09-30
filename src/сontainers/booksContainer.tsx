import { RootState } from "../redux/rootReducer";
import  BooksComponent  from "../сomponents/books/booksComponent";
import { connect } from "react-redux";
import { doBooks } from "../redux/books/actions";
import { doBooksToBasket, doBooksUpdate } from "../redux/books/actions";


const mapStateToProps = (state: RootState) => ({
  isLog: state.login.isLog,
  dataProducts: state.books.dataProducts,
  data: state.login.data,
});

export default connect(
  mapStateToProps,
  { doBooks, doBooksToBasket, doBooksUpdate },
)(BooksComponent);