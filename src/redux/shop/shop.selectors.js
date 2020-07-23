import { createSelector } from 'reselect';

export const selectCollections = createSelector(
    [state => state.shop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => {
        const collectionKeys = Object.keys(collections);
        return collectionKeys.map(key => collections[key]);
    }
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );