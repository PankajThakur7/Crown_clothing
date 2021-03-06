import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

export const CollectionPreview = ({ title,items }) =>(

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {items
            .filter((item,indx)=> indx<4)
            .map(({id, ...otherItemProps})=>(
            <CollectionItem key={id} {...otherItemProps} />
            //<div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)

export default CollectionPreview;