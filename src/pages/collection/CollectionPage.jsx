import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/selectors'
import './CollectionPage.scss';
import CollectionItem from '../../components/collection-item/CollectionItem';

export function CollectionPage({ collection, match }){
    return(
        <div className='collection-page'>
            <h2 className='title'>{collection.title}</h2>
            <div className='items'>
                {
                    collection.items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);