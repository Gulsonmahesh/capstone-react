import ProductList from '../product/ProductList';
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

class RightPane extends Component {
    render() {
        return (
        <Fragment>
            <div className="container p-3">
                {
                    (this.props.product.length) && <ProductList products={this.props.product} filterProduct = {this.props.filter} />
                }
            </div>
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