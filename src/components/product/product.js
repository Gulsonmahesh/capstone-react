
import React, { Fragment }  from 'react';
import Image from "./sample-1.jpg";

const Product = ({productData}) => {
    
    const openProduct = (product) => {
        alert(product.title);
    }

    return (
        <Fragment>
            <div className="cardContainer d-flex">
                {
                    productData.map(product => {
                        return (
                        <div key ={product.id} className="card">
                            <img className="card-img-top" src={Image} alt="Card cap" onClick={() => openProduct(product)} />
                            <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        )
                    })
                }
                
            </div>
        </Fragment>
    );
}

export default Product;