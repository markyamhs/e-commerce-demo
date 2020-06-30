import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CategoryPage from "./category.component";
import { selectIsItemsLoaded } from "../../redux/shop/shop.selector";

const mapStateToProps = (state) => ({
  isItemsLoaded: selectIsItemsLoaded(state),
});

const CategoryPageContainer = connect(mapStateToProps)(
  WithSpinner(CategoryPage)
);
export default CategoryPageContainer;
