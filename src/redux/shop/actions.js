export function updateCollections(collectionsMap){
    return{
        type: shopActionTypes.UPDATE_COLLECTIONS,
        collectionsMap
    }
}

export const shopActionTypes = {
    UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS'
}