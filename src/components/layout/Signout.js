import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authAction';

const Signout = (props) => {
    
    const logout = (event) => {
        event.preventDefault();
        props.logOut();
    }
    
    return (
        <Fragment>
            <ul className="navbar-nav ml-auto flex-row mr-3 align-center">
                {/* <li><Link href="/cart"><i className="medium material-icons">add_shopping_cart</i></Link></li> */}
                <li><Link to="/" onClick={(event) => logout(event)} >Sign Out</Link></li>
                <li>
                    <span data-target="dropdown1" className="btn btn-small d-none d-lg-block d-md-block">MM</span>
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

export default connect(null, mapDispatchToProps)(Signout)
