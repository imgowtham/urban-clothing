import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import Collections from './collection.data'

class ShopPage extends React.Component {
    constructor() {
        super()
        this.state = {
            collections: Collections
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;