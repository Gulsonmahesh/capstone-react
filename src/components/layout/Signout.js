import { Fragment } from "react";
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authAction';



const Signout = (props) => {

    const logout = (event) => {
        event.preventDefault();
        props.logOut();
    }

    return (
        <Fragment>
            <ul className="right mr-3">
                <li><a href="/"><i className="medium material-icons">add_shopping_cart</i></a></li>
                <li><a href="/" onClick={(event) => logout(event)} >Sign Out</a></li>
                <li className="divider"></li>
                <li><span data-target="dropdown1" className="btn-floating btn-large  d-none d-lg-block d-md-block waves-effect waves-light blue dropdown-trigger mt-1">MM</span></li>
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
