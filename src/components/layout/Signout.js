import { Fragment } from "react";

export default function Signout() {
    return (
        <Fragment>
            <ul className="right mr-3">
                <li><a href="/"><i className="medium material-icons">add_shopping_cart</i></a></li>
                <li><a href="/">Sign Out</a></li>
                <li className="divider"></li>
                <li><span data-target="dropdown1" className="btn-floating btn-large  d-none d-lg-block d-md-block waves-effect waves-light blue dropdown-trigger mt-1">MM</span></li>
            </ul>
        </Fragment>
    )
}
