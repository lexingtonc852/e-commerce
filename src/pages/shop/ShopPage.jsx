import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/actions';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export class ShopPage extends React.Component{
  state = {
    loading: true
  }

  unsubscribeFromSnapShot = null;

  componentDidMount(){
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    })

  }
  render(){
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route 
          exact path={`${match.path}`} 
          render={(props) => 
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} 
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => 
            <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    ); 
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);

