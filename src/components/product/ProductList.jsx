import React, { Component } from 'react'
import Product from './product';


class ProductList extends Component {
    render() {
        let selectedBrand = '';
        // let selectedPrice = '';
        let productData = [];

        if (this.props.filterProduct !== null ){
            selectedBrand = (this.props.filterProduct.selectedBrand) ? (this.props.filterProduct.selectedBrand).trim() : '';
            // selectedPrice = (this.props.filterProduct.selectedPrice) ? this.props.filterProduct.selectedPrice : '';
            if (selectedBrand === 'All') {
                productData = this.props.products;
            } else {
                productData = this.props.products.filter(product => product.brand === selectedBrand);
            }
        } else {
            productData = this.props.products;
        }
                
        return <Product productData={productData} />
    }
}

export default ProductList;
