import React, { Fragment }  from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { addtocart } from '../../store/actions/productAction';

// import Image from "./sample-1.jpg";

const Product = ({productData}) => {
    const disp = useDispatch();
    const history = useHistory();
    
    const openProduct = (product) => {
        history.push({pathname: `/product/${product.name}`});
    }

    function addtoCart(selectedProduct) {
        let alreadyExist = 0;
        if(sessionStorage.getItem('productsincart')) {
            alreadyExist =   (JSON.parse(sessionStorage.getItem('productsincart')).filter(product => product.id === selectedProduct.id)).length;
        }
        if (alreadyExist) {
            alert('Product already Exist in the cart')
            return false;
        }
        disp(addtocart({...selectedProduct,count:1}));
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
                                <div className="col-sm-12 col-md-4 col-lg-4" key ={product.name}>
                                    <div className="card"  style={{height: '400px', width: "225px"}}>
                                        <img className="card-img-top mt-3" src={product.images} alt={product.name} onClick={() => openProduct(product)} />
                                        <div className="card-body d-flex justify-content-center">
                                            <h5 className="card-title" onClick={() => openProduct(product)} >{product.name}</h5>                                        
                                        </div>
                                        <div className="card-footer d-flex justify-content-center">
                                            <button className="addtocart" onClick={() => addtoCart(product)}>ADD TO CART</button>
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
                <div className="Container d-flex shadow-lg p-3 mb-5 bg-white rounded mt-5"> 
                    No Products Available. Please Modify the search Critiria
                </div>
            </Fragment>
        )
    }
}

export default Product;