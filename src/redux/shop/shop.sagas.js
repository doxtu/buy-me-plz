import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { FETCH_COLLECTIONS_START } from './shop.types';

import { fetchCollectionsSuccess, fetchCollectionsFail } from './shop.actions';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionsFail(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}