import { Fragment } from "react";

export default function Signout() {
    return (
        <Fragment>
            <ul className="right mr-5">                
                <li><a href="/">Cart</a></li>
                <li><a href="/">Add Product</a></li>                
                <li><a href="/">Sign Out</a></li>
                <li className="divider"></li>
                <li><span data-target="dropdown1" className="btn-floating btn-large  waves-effect waves-light blue dropdown-trigger">MM</span></li>
            </ul>
        </Fragment>
    )
}
