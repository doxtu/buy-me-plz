import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

class ShopPage extends React.Component {
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map( 
                        collection => (<CollectionPreview 
                            title={collection.title}
                            items={collection.items}
                            key={collection.id}  />
                    ))
                }
            </div>
            
        )
    }
}

export default ShopPage;