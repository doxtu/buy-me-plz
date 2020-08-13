import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAIL } from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collections => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collections 
});

export const fetchCollectionsFail = errorMessage => ({
    type: FETCH_COLLECTIONS_FAIL,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(async snapshot => {
        const collections = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collections));
    }).catch(error => ({
        type: FETCH_COLLECTIONS_FAIL,
        payload: error.message
    }))
}