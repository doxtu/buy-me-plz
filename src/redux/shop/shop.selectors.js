import { createSelector } from 'reselect';

export const selectCollections = createSelector(
    [state => state.shop],
    shop => shop.collections
);

export const selectIsFetching = createSelector(
    [state => state.shop],
    shop => shop.isFetching
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => {
        const collectionKeys = collections ? Object.keys(collections) : [];
        return collectionKeys.map(key => collections[key]);
    }
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    );

export const selectIsCollectionsLoaded = createSelector(
    [state => state.shop],
    shop => !!shop.collections
);