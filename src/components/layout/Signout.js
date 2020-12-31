import { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authAction';
import Cart from '../product/Cart';
import { useHistory } from 'react-router';

const Signout = (props) => {
    const [avatar, setAvatar] = useState('');
     const histroy = useHistory();

    useEffect(()=> {
        if(sessionStorage.getItem('userStatus')) {
            let userStatus = JSON.parse(sessionStorage.getItem('userStatus'));
            setAvatar(userStatus.user[0].firstName[0]+userStatus.user[0].lastName[0]);
        } else {
            setAvatar('');
        }
    },[])
    
    const logout = (event) => {
        event.preventDefault();
        props.logOut();
    }

    const editProfile = (event) => {
        event.preventDefault();
        histroy.push({pathname: `/signup/`});
    }
    
    return (
        <Fragment>
            <ul className="navbar-nav ml-auto flex-row mr-3 align-center">
                <Cart />
                <li><Link to="/" onClick={(event) => logout(event)} >Sign Out</Link></li>
                <li><span data-target="dropdown1" className="btn btn-small d-none d-lg-block d-md-block">{avatar}</span></li>
                <li><Link to="/" onClick={(event) => editProfile(event)} >Edit Details</Link></li>
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
