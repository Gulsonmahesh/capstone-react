import React, { Component, Fragment } from 'react'
import { API_BASE_ADDRESS } from '../../utilities/constants'

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

    render() {
        const productData = this.state.productDetails;
        return (
            <Fragment>
                {
                    productData !== null && 
                    <div className = "container-fluid p-2 mt-5">
                    <div className="row mt-5">
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <div className="p-2 border">
                                <img src={productData.images} alt={productData.name} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 p-2">
                            <h2 className="mb-1">{productData.name}</h2>
                            <h3 className="mb-1">{productData.mrp}</h3>
                            <h4 className="mb-1">Highlights</h4>
                            <div className="p-2">
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
                            </div>
                        </div>
                    </div>
                    <div className="row"></div>
                    </div>
                }
            </Fragment>
        )
    }
}

export default ProductDetails;
