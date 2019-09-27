import { RootState } from "../redux/rootReducer";
import  ProductsComponent  from "../сomponents/products/productsComponent";
import { connect } from "react-redux";
import { doProducts } from "../redux/products/actions";
import { doProductsToBasket, doProductsUpdate } from "../redux/products/actions";


const mapStateToProps = (state: RootState) => ({
  isLog: state.login.isLog,
  dataProducts: state.products.dataProducts,
  data: state.login.data,
});

export default connect(
  mapStateToProps,
  { doProducts, doProductsToBasket, doProductsUpdate },
)(ProductsComponent);