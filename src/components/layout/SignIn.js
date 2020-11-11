import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';

export default function SignIn() {
    return (
        <Fragment>
            <ul className="right mr-5">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </Fragment>
    )
}
