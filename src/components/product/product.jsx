import React, { Fragment, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { addtocart } from '../../store/actions/productAction';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { checkDuplicate } from '../../utilities/commonfunctions';

const Product = ({productData}) => {
    const disp = useDispatch();
    const history = useHistory();
    
    const openProduct = (product) => {
        history.push({pathname: `/product/${product.name}`});
    }
    useEffect(() => {
        document.querySelector('html').style.overflow = 'hidden !important';
    },[])
    function addtoCart(selectedProduct) {
        if(checkDuplicate(selectedProduct.id)) {
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
                    productList.map((productRow, index) => <div className="row mb-2 mr-2 ml-0" key= {index}>{
                        productRow.map((product) => {
                            return (
                                <div className="col-sm-12 col-md-4 col-lg-4 p-1" key ={product.name}>
                                    <Card className="border-0 w-100 mb-2 mb-md-0 mb-lg-0">
                                        <Card.Img variant='top' className="mt-3" src={product.images} alt={product.name} onClick={() => openProduct(product)} />
                                        <Card.Body className="mb-1 mb-md-0 mb-lg-0 p-1">
                                            <h6 className="card-title text-center" onClick={() => openProduct(product)} >{product.name}</h6>                                            
                                        </Card.Body>
                                        <Card.Footer className="d-flex justify-content-center border-0">
                                            <Button size="sm" varient="primary" className="addtocart" onClick={() => addtoCart(product)}>Add To Cart</Button>
                                        </Card.Footer>
                                    </Card>
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