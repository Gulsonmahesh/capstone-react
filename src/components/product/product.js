
import React, { Fragment }  from 'react';
import Image from "./sample-1.jpg";

const Product = ({productData}) => {
    const openProduct = (product) => {
        alert(product.title);
    }

    return (
        <Fragment>
            <div className="card cardContainer d-flex">
                <img className="card-img-top" src={Image} alt="Card cap" onClick={() => openProduct(productData)} />
                <div className="card-body">
                <h5 className="card-title">{productData.title}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </Fragment>
    );
}

export default Product;