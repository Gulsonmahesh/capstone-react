import ProductList from '../product/ProductList';
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

class RightPane extends Component {
    // componentDidMount() {
    //     console.log(this.props.product);
    // }
    
    render() {
        return (
        <Fragment>
            <ProductList products={this.props.product} />
        </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product.products,
    }
}

export default connect(mapStateToProps)(RightPane);