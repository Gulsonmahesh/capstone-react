import React, { Component } from 'react'
import Product from './product';


class ProductList extends Component {
    render() {
        let selectedBrand = '';
        let selectedPrice = '';
        let productData = [];

        console.log(this.props.filterProduct);
        if (this.props.filterProduct !== null ){
            selectedBrand = (this.props.filterProduct.selectedBrand) ? this.props.filterProduct.selectedBrand.split(':')[1].trim() : '';
            selectedPrice = (this.props.filterProduct.selectedPrice) ? this.props.filterProduct.selectedPrice : '';
            if (selectedBrand === 'All') {
                productData = this.props.products;
            } else {
                productData = this.props.products.filter(product => product.modal === selectedBrand);
            }
        } else {
            productData = this.props.products;
        }
                
        return <Product productData={productData} />
    }
}

export default ProductList;
