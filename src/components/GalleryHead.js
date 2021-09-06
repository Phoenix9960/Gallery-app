import React from 'react';

import '../styles/slideButtom.css';

export const GalleryHead = ({ handleMode }) => {
    return (
        <div className='galleryHeader' >
            <h1>Gallery-App</h1>

            <input 
                type="checkbox"
                onClick={ handleMode } 
            />
        </div>
    )
}
