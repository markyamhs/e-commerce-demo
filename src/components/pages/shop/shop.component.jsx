import React, { Component } from "react";
import CollectionOverview from "../../collections-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CategoryPage from "../../category/category.component";
import firebase, {
  firestore,
  convertCollectionSnapshotToObject,
} from "../../../firebase/firebase.utils";
import { connect } from "react-redux";
import { getShopCollectionsItems } from "../../../redux/shop/shop.action";
import WithSpinner from "../../with-spinner/with-spinner.component";

class ShopPage extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    this.unsubscribe = firestore
      .collection("collections")
      .onSnapshot(async (collectionsSnapshot) => {
        await this.props.fetchItemsFromFireStore(
          convertCollectionSnapshotToObject(collectionsSnapshot)
        );
        this.setState({ loading: false });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
    const CategoryPageWithSpinner = WithSpinner(CategoryPage);
    return (
      <div className="shop-page">
        {/* either one of the below page will fire, no need <switch>*/}
        <Route
          exact
          path={`${this.props.match.path}`}
          render={(allprops) => (
            <CollectionOverviewWithSpinner
              isLoading={this.state.loading}
              {...allprops}
            />
          )}
        />
        {/* the ":" before categoryID makes categoryID a props of component={Category} => props.match.params.categoryID*/}
        <Route
          path={`${this.props.match.path}/:categoryID`}
          render={(allprops) => (
            <CategoryPageWithSpinner
              isLoading={this.state.loading}
              {...allprops}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItemsFromFireStore: (CollectionsItemsObj) =>
      dispatch(getShopCollectionsItems(CollectionsItemsObj)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
