import React from 'react'
import SignIn from './SignIn';
import SignOut from './Signout';

export default function Navbar() {
    return (
        <div className = "container-fluid p-0">
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo ml-5">Shoppify</a>
                    <SignOut />
                    <SignIn />
                </div>
            </nav>
        </div>
    )
}
