import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

function HeaderComponent() {

    return(
        <header className="navbar navbar-light bg-light shadow-sm">
            <div className="container">
                <div className="row">
                    Task tracker
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;