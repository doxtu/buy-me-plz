import { connect } from 'react-redux';
import { compose } from 'redux'; 
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.components';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;