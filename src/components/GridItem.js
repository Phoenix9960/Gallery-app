import React from 'react';

export const GridItem = ({ url, title = "Picture from Gallery" }) => {
    return (
        <>
            <img 
                src={ url }
                alt={ title }
                className = "gridImgs animate__bounceIn"
            />
        </>
    )
}
