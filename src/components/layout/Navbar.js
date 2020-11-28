import React from 'react'
import SignIn from './SignIn';
import SignOut from './Signout';
import './Navbar.css';

export default function Navbar(props) {
    return (
        <div className = "container-fluid p-0">
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo ml-5 ml-md-3 ml-lg-3 d-block d-lg-block d-md-block">Shoppify</a>
                    {
                        (props && props.loginStatus) ? <SignOut /> :  <SignIn />
                    }
                </div>
            </nav>
        </div>
    )
}
