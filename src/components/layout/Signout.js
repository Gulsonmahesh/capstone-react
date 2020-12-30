import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authAction';
import Cart from '../product/Cart';

const Signout = (props) => {
    
    const logout = (event) => {
        event.preventDefault();
        props.logOut();
    }
    
    return (
        <Fragment>
            <ul className="navbar-nav ml-auto flex-row mr-3 align-center">
                <Cart />
                <li><Link to="/" onClick={(event) => logout(event)} >Sign Out</Link></li>
                <li><span data-target="dropdown1" className="btn btn-small d-none d-lg-block d-md-block">MM</span>
                </li>
            </ul>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        // userDetails : state.
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signout)
