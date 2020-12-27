
import React, { Fragment }  from 'react';
import Image from "./sample-1.jpg";

const Product = ({productData}) => {
    const openProduct = (product) => {
        alert(product.title);
    }
    if( productData.length ) {
        const productList = productData.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index/3)
        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }
        resultArray[chunkIndex].push(item)
        return resultArray
        }, [])
        
        return (
            <Fragment>
                {
                    productList.map((productRow, index) => <div className="row mb-3" key= {index}>{
                        productRow.map((product) => {
                            return (
                                <div className="col-4" key ={product.id}>
                                    <div className="card">
                                        <img className="card-img-top" src={Image} alt="Card cap" onClick={() => openProduct(product)} />
                                        <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                        <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>)
                }
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <div className="Container d-flex shadow-lg p-3 mb-5 bg-white rounded mt-5"> No Products Available. Please Modify the search Critiria</div>
            </Fragment>
        )
    }
}

export default Product;