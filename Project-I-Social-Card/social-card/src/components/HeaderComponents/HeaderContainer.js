import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

function HeaderContainer() {
return(
    <div className='container-header'>
    <ImageThumbnail />
    <HeaderTitle />
    </div>
    );
}

export default HeaderContainer