import React from 'react';
import { GridItem } from './GridItem';

export const GalleryGrid = ({ imgs }) => {
    return (
        <div className="galleryGrid" >

            { imgs.map( ({ url, title }, i) => {
                return <GridItem key={ i } url={ url } title={ title } />
            }) }

        </div>
    )
}