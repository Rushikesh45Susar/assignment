import React from 'react';
import {Link , useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return(
        <>
        <div className="container mt-3 mb-5">
            <ul className="nav nav-pills nav-fill justify-content-center">
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname =="/" ? "active" : ""}`} to="/">Admin</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname =="/user" ? "active" : ""}`} to="/user"> User</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Header ;