import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import Cart from '../product/Cart';
import { NavItem } from 'react-bootstrap';

export default function SignIn() {
    return (
        <Fragment>
            <ul className="navbar-nav ml-auto flex-row">
                <Cart />
                <NavItem className="mr-3"><Link to="/Summary">Summary</Link></NavItem>
                <NavItem className="mr-3"><Link to="/signup"><span className="sr-only">(current)</span>Sign Up</Link></NavItem>
                <NavItem><Link to="/login">Login</Link></NavItem>
            </ul>
        </Fragment> 
    )
}
