import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import Cart from '../product/Cart';

export default function SignIn() {
    return (
        <Fragment>
            <ul className="navbar-nav ml-auto flex-row">
                <Cart />
                <li className="nav-item"><Link to="/signup"><span className="sr-only">(current)</span>Sign Up</Link></li>
                <li className="nav-item"><Link to="/login">Login</Link></li>
            </ul>
        </Fragment> 
    )
}
