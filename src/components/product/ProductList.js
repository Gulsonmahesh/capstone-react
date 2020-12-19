import React, { Component } from 'react'
import Product from './product';
class ProductList extends Component {
    render() {
        return this.props.products.map(product => <Product key= {product.id} productData={product} />)
    }
}

export default ProductList;
