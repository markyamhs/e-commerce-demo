import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchShopItemsStart } from "../../../redux/shop/shop.action";
import { selectIsItemsLoaded } from "../../../redux/shop/shop.selector";
import CollectionOverviewContainer from "../../collections-overview/collection-overview-container.component";
import CategoryPageContainer from "../../category/category-container.component";

class ShopPage extends Component {
  componentDidMount() {
    // the below code uses an alternative approach (i.e. listener pattern/real-time update)to fetch date
    // this.unsubscribe = firestore
    //   .collection("collections")
    //   .onSnapshot(async (collectionsSnapshot) => {
    //     await this.props.fetchItemsFromFireStore(
    //       convertCollectionSnapshotToObject(collectionsSnapshot)
    //     );
    //     this.setState({ loading: false });
    //   });

    //below is promise pattern
    this.props.fetchItemsFromFireStore();
  }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  render() {
    return (
      <div className="shop-page">
        {/* either one of the below page will fire, no need <switch>*/}
        <Route
          exact
          path={`${this.props.match.path}`}
          component={CollectionOverviewContainer}
        />
        {/* the ":" before categoryID makes categoryID a props of component={Category} => props.match.params.categoryID*/}
        <Route
          path={`${this.props.match.path}/:categoryID`}
          component={CategoryPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchItemsFromFireStore: (CollectionsItemsObj) =>
    //   dispatch(getShopCollectionsItems(CollectionsItemsObj)),
    fetchItemsFromFireStore: () => dispatch(fetchShopItemsStart()),
  };
};

const mapStateToProps = (state) => {
  return {
    isItemsLoaded: selectIsItemsLoaded(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
