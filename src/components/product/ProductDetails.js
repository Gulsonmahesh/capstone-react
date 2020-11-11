import React, { Component } from 'react'

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div className = "container-fluid p-2 mt-5">
                Product Details
            </div>
        )
    }
}

export default ProductDetails;
