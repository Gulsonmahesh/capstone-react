import React, { Component, Fragment } from 'react'
import { API_BASE_ADDRESS, API_OPTION } from '../../utilities/constants'
import { connect } from 'react-redux';
import { addtocart } from '../../store/actions/productAction';
import Button from 'react-bootstrap/Button';
import { checkDuplicate } from '../../utilities/commonfunctions';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {"viewproduct": this.props.location.pathname.split('/').pop(),
        productDetails: null};
    }
    componentDidMount() {
        fetch(`${API_BASE_ADDRESS}/modals?name=${this.state.viewproduct}`).then(res => res.json()).then (
            result =>  {
                this.setState({productDetails : result[0]});
                fetch(`${API_BASE_ADDRESS}/productsmostviewed/?id=${this.state.productDetails.id}`).then(res => res.json()).then(
                    result => {
                        if(result && result[0] && result.length) {
                            this.changeViewCount('update', {id: result[0].id, name: result[0].name, timeofview: parseInt(result[0].timeofview) + 1})
                        } else {
                            this.changeViewCount('insert', {id: this.state.productDetails.id, name: this.state.productDetails.name, timeofview: 1})
                        }
                    }
                )
            }
        ).catch(err=> {
            alert("Unable to retrieve data", err);
        })
    }
    
    addmostviewed = async (product) => {
        await fetch(`${API_BASE_ADDRESS}/productsmostviewed`,{...API_OPTION, body: JSON.stringify(product)}).then(result => {
            console.log(result)
        }).catch((error) => {
            console.log('Error:', error);
        });
    }

    changeViewCount = (type, productData) => {
        if(type === 'update') {
            fetch(`${API_BASE_ADDRESS}/productsmostviewed/${productData.id}`, {method : 'DELETE'})
            .then(result => {
                this.addmostviewed(productData)
            })
        } else {
            this.addmostviewed(productData)
        }
    }
    addtocart = (id) => {
        let productSelected = this.state.productDetails;
         if(checkDuplicate(id)) {
            alert('Product already Exist in the cart')
            return false;
        }
        const producttoadd = {brand: productSelected.brand, mrp: productSelected.mrp, name: productSelected.name, count:1}
        this.props.addtocart(producttoadd);
    }

    backToaction = (path) => {
        this.props.history.push(`${path}`);
    }

    render() {
        const productData = this.state.productDetails;
        return (
            <Fragment>
                {
                    productData !== null && 
                    <div className = "container-fluid p-2 mt-5" data-test='productdetails'>
                    <div className="row m-1 p-2">
                        <div className="col-md-6 col-lg-4 col-sm-5">
                            <img className="mb-3" src={productData.images} alt={productData.name} />
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-7 p-2">
                            <h2 className="mb-1">{productData.name}</h2>
                            <h3 className="mb-1">Price : {productData.mrp}</h3>
                            <h4 className="mb-1 text-muted">Highlights</h4>
                            <div className="p-0 mb-2">
                                <div className="row">
                                    <div className="col-4">Performance: </div>
                                    <div className="col">{productData.performance ? productData.performance : ''}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Display: </div>
                                    <div className="col">{productData.display ? productData.display : ''}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Storage: </div>
                                    <div className="col">{productData.storage ? productData.storage: ''}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Camera: </div>
                                    <div className="col">{productData.camera ? productData.camera : ''}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Battery: </div>
                                    <div className="col">{productData.battery ? productData.battery : ''}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Ram: </div>
                                    <div className="col">{productData.ram ? productData.ram: ''}</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="d-flex align-items-center justify-content-between my-3" id="cartActions">
                                    <Button variant="primary" className="text-center" onClick={() => this.addtocart(productData.id)}>Add to Cart</Button>
                                    <Button variant="secondary" className="text-center" onClick={() => this.backToaction('/')}>Back to shopping</Button>
                                    {this.props.productsIncart && <Button variant="light" onClick={() => this.backToaction('/checkout')}>Back to Cart</Button> }
                                </div>
                                </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                }
            </Fragment>
        )
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        addtocart : (product) => dispatch(addtocart(product))
    }
}

const mapStateToProps = (state) => {
    return {
        productsIncart: state.product.productsincart.length ? true : false
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(ProductDetails);
