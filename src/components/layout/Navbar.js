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
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-primary">
                <a href="/" className="navbar-brand mx-lg-3 mx-0 d-block d-lg-block d-md-block">Shoppify</a>
                { (userDetails.loginStatus) ? <SignOut /> :  <SignIn /> }
            </nav>
        </div>
    )
}
