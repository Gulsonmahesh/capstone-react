import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Cart extends Component {
    render() {
        return (
            <Fragment>
                <li className="nav-item">
                    <Link to="/cart" className="btn btn-primary">  Cart <span className="badge badge-light">4</span> </Link>
                </li>
            </Fragment>
        );
    }
}

export default connect()(Cart);