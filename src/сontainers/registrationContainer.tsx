import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { RegistrationComponent } from "../сomponents/registration/RegistrationComponent";
import { doRegistration } from "../redux/registration/actions";

const mapStateToProps = (state: RootState) => ({
isLog: state.registration.isLog,
});

export default connect(
  mapStateToProps,
  { doRegistration }
)(RegistrationComponent);