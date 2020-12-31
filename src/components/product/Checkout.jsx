import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { countChanger, removeFromcart } from '../../store/actions/productAction';
import AlertModal from './AlertModal';

class Checkout extends Component {
  constructor(props){
    super(props);
    this.state = { totalPrice: 0, notproceedtopayment: null }
  }
  
  proceedtopayment = () => {
      this.setState({notproceedtopayment: (!sessionStorage.getItem('userStatus') ? true : false)});
  }

  getProductPricetotal = () => {
    let productPrice = this.props.selectedProduct.map(product => parseInt(product.mrp)*product.count).reduce((a, b) => a + b, 0);
    this.setState({totalPrice : productPrice});
  }

  setpagevisibility = (displayType, scrollType) => {
    document.querySelector("#cartlistitem").style.display = displayType;
    // document.querySelector("#checkoutcontainer").style.overflow = scrollType;
    this.getProductPricetotal();
  }

  componentDidMount() {
    this.setpagevisibility('none', 'auto');
  }

  componentWillUnmount() {
    this.setpagevisibility('block', 'hidden');
  }

  countChange = (product,type) => {
    this.props.countChanger(product,type)
    setTimeout(() => {
      this.getProductPricetotal()
    }, 0);
  }

  reRoutetoHome = (path) => {
    this.closeModal();
    this.props.history.push(path);
  }

  removeProduct = (id) => {
    this.props.removeFromcart(id);
    setTimeout(() => {
      if(this.props.selectedProduct.length <=0) {
        this.reRoutetoHome('/');
      } else {
        this.getProductPricetotal()
      }
    }, 0);
  }

  closeModal = () => {
    this.setState({notproceedtopayment : null})
  }

  render() {
    const selectedProducts = this.props.selectedProduct;
    const openModal = this.state.notproceedtopayment
      return (
        <Fragment>
          {
              openModal ? <AlertModal gotologin={() => this.reRoutetoHome('/login')} loginStatus={this.state.notproceedtopayment} closeModal={this.closeModal} message= "Please login before proceed to Payment" />
              : (openModal === false ) ? <AlertModal loginStatus={this.state.notproceedtopayment} closeModal={this.closeModal} message= "Module yet to develop" /> : '' 
            }
          <div id="checkoutcontainer" className="container mt-5 pt-5">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-8 p-2 order-2 order-md-1 order-lg-1" id="checkoutlist">
              { 
                this.props.selectedProduct.length>0 && selectedProducts.map((product, index) => <div key={index} className="card mb-3" >
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted d-none">{product.count}</h6>
                  <p className="card-text">Price : Rs. {product.mrp}</p>
                  <div>
                    <button disabled= {product.count === 1} type="button" className="btn btn-secondary mr-2" onClick={() => this.countChange(product, 'decrease')}>-</button>
                    <button type="button" className="btn btn-light mr-2 disabled">{product.count}</button>
                    <button type="button" className="btn btn-primary mr-4"  onClick={() => this.countChange(product, 'increase')}>+</button>
                    <button className="btn btn-danger" onClick={()=> this.removeProduct(product.id)}>Remove</button>
                  </div>
                </div>
              </div>)
              }
              </div>
              <div className="col-12 col-md-4 col-lg-4 p-2 order-1 order-md-2 order-lg-2">
              <div className="card mb-3" >
                <div className="card-header">Total Price</div>
                <div className="card-body">
                <p className="card-text">{this.state.totalPrice}</p>
                </div>
                <div className="card-footer">
                  <button type="button" className="btn btn-success w-100 d-block mb-3" onClick={this.proceedtopayment}>Proceed to Payment</button>
                  <button type="button" className="btn btn-info w-100 d-block" onClick={() => this.reRoutetoHome('/')}>Back to Shopping</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    countChanger: (product,type) => dispatch(countChanger(product,type)),
    removeFromcart: (id) => dispatch(removeFromcart(id))
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.productsincart ? state.product.productsincart : null,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
