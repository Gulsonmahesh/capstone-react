import React, { Component, Fragment } from 'react'
import { API_BASE_ADDRESS } from '../../utilities/constants'
import { connect } from 'react-redux';
import { addtocart } from '../../store/actions/productAction';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {"viewproduct": this.props.location.pathname.split('/').pop(),
        productDetails: null};
    }
    componentDidMount() {
        console.log(API_BASE_ADDRESS)
        fetch(`${API_BASE_ADDRESS}/modals?name=${this.state.viewproduct}`).then(res => res.json()).then (
            result =>  {
                this.setState({productDetails : result[0]})
            }
        ).catch(err=> {
            alert("Unable to retrieve data");
        })
    }
    
    addtocart = (product) => {
        let alreadyExist = 0;
        if(sessionStorage.getItem('productsincart')) {
            alreadyExist =   (JSON.parse(sessionStorage.getItem('productsincart')).filter(products => products.id === product.id)).length;
        }
        if (alreadyExist) {
            alert('Product already Exist in the cart')
            return false;
        }
        console.log(product);
        const producttoadd = {brand: product.brand, mrp: product.mrp, name: product.name, count:1}
        this.props.addtocart(producttoadd);
    }

    backtoshopping = () => {
        this.props.history.push('/');
    }

    render() {
        const productData = this.state.productDetails;
        return (
            <Fragment>
                {
                    productData !== null && 
                    <div className = "container-fluid p-2 mt-5">
                    <div className="row mt-5">
                        <div className="col-md-6 col-lg-4 col-sm-12">
                            <div className="p-2 border">
                                <img src={productData.images} alt={productData.name} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 p-4">
                            <h2 className="mb-1">{productData.name}</h2>
                            <h3 className="mb-1">{productData.mrp}</h3>
                            <h4 className="mb-1">Highlights</h4>
                            <div className="p-2 mb-2">
                                <div className="row">
                                    <div className="col-4">Performance: </div>
                                    <div className="col">{productData.keyFeatures.performance}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Display: </div>
                                    <div className="col">{productData.keyFeatures.display}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Storage: </div>
                                    <div className="col">{productData.keyFeatures.storage}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Camera: </div>
                                    <div className="col">{productData.keyFeatures.camera}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Battery: </div>
                                    <div className="col">{productData.keyFeatures.battery}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Ram: </div>
                                    <div className="col">{productData.keyFeatures.ram}</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="d-flex align-items-center justify-content-between mt-3"> 
                                    <button className="btn btn-primary text-center" onClick={(productData) => this.addtocart(productData)}>Add to Cart</button>
                                    <button className="btn btn-secondary text-center mr-5" onClick={this.backtoshopping}>Back to shopping</button>
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

export default connect(null, mapDisptachToProps)(ProductDetails);
