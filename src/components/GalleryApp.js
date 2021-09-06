import React, { useState } from 'react';
import { GalleryGrid } from './GalleryGrid';

import '../styles/galleryStyle.css';
import { GalleryHead } from './GalleryHead';

export const GalleryApp = () => { 

    const [darkMode, setDarkMode] = useState( false )

    const handleButtom = (e) => {
        setDarkMode( e.target.checked )
    }

    const [ imgs ] = useState(
        [
            {
                url : 'https://i.pinimg.com/originals/f7/ae/e8/f7aee8753832af613b63e51d5f07011a.jpg',
                title: 'nice wallpaper'
            },
            {
                url : 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                title: 'nice wallpaper'
            },
            {
                url : 'https://www.redhoku.com/wp-content/uploads/IPhone_xs_wallpaper_-5ce861ae-18a8-4744-9641-13babbf54801-576x1024.jpg',
                title: 'nice wallpaper'
            },
            {
                url : 'https://wallpaperaccess.com/full/1704155.jpg',
                title: 'nice wallpaper'
            },
            {
                url : 'https://isenacode.com/wp-content/uploads/2020/09/wallpaper-iphone-w39-1-scaled.jpg',
                title: 'nice wallpaper'
            },
            {
                url : 'https://cdn6.aptoide.com/imgs/b/e/b/bebc6b7a8033563df888aa53c47c714c_screen.jpg?h=500',
                title: 'nice wallpaper'
            },
            {
                url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBwFnK7FXviitQkBr-4zJl79FszaLKUzfcRQ&usqp=CAU',
                title: 'nice wallpaper'
            },
            {
                url : 'https://cdn.wallpapersafari.com/48/85/51tIX7.jpg',
                title: 'nice wallpaper'
            },
            {
                url : 'https://i.pinimg.com/originals/82/f2/36/82f2364b6512247726c00292f7fc4a57.jpg',
                title: 'nice wallpaper'
            },
            {
                url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4-W_rEeXM1J6Uuofwe0gj_fEG-qJenCXOQ&usqp=CAU',
                title: 'nice wallpaper'
            }
        ]
    );

    return (
        <div className={ `galleryStyle ${(darkMode) ? 'darkMode' : 'ligthMode'}  ` } >

            <GalleryHead handleMode={ handleButtom } />
            <hr />

            <GalleryGrid imgs={ imgs } />

        </div>
    )
}
