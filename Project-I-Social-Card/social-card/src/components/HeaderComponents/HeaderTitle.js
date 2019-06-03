import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

function HeaderTitle(){
    return (
        <div className='header-title-wrapper'>
            <div className='header-title'>
                <h3>Lambda School</h3>
                <p>@LambdaSchool 26 JAN</p>
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderTitle