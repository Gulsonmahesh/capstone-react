import React from 'react'
import SignIn from './SignIn';
import SignOut from './Signout';
import './Navbar.css';
import { Navbar, NavbarBrand } from 'react-bootstrap';

export default function NavBar() {
    let userDetails = {loginStatus : false};
    if(sessionStorage.getItem('userStatus')) {
        userDetails = JSON.parse(sessionStorage.getItem('userStatus'));
    }
    return (
        <div className = "container-fluid p-0">
            <Navbar color="light" expand="lg"  className="bg-primary">
                <NavbarBrand href="/" className="mx-lg-3 mx-0 d-block d-lg-block d-md-block">Shoppify</NavbarBrand>
                { (userDetails.loginStatus) ? <SignOut /> :  <SignIn /> }
            </Navbar>
        </div>
    )
}
