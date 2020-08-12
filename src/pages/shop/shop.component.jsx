import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import WithSpinner from '../../components/with-spinner/with-spinner.components';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        const collectionRef = firestore.collection('collections');
        const { updateCollections } = this.props;

        collectionRef.onSnapshot(async snapshot => {
            const collections = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collections);
            this.setState({ isLoading: false });
        })
    }  

    render(){
        const { match } = this.props;
        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={this.state.isLoading} {...props}/>} />
            <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={this.state.isLoading} {...props}/>} />
        </div>
        )
    }  
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);