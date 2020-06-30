import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";
import { selectIsItemsLoaded } from "../../redux/shop/shop.selector";

const mapStateToProps = (state) => ({
  isItemsLoaded: selectIsItemsLoaded(state),
});

const CollectionOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionOverview)
);
export default CollectionOverviewContainer;
