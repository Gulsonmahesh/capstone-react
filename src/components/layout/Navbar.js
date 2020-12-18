import React from 'react'
import SignIn from './SignIn';
import SignOut from './Signout';
import './Navbar.css';

export default function Navbar(props) {
    let userDetails = {loginStatus : false};
    if(sessionStorage.getItem('userStatus')) {
        userDetails = JSON.parse(sessionStorage.getItem('userStatus'));
    }
    return (
        <div className = "container-fluid p-0">
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo mx-5 d-block d-lg-block d-md-block">Shoppify</a>
                    {
                        (userDetails.loginStatus) ? <SignOut /> :  <SignIn />
                    }
                </div>
            </nav>
        </div>
    )
}
