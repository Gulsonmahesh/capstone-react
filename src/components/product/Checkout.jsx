import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { countChanger, removeFromcart } from '../../store/actions/productAction';
import AlertModal from './AlertModal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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

  setpagevisibility = (displayType) => {
    (document.querySelector("#cartlistitem")) && (document.querySelector("#cartlistitem").style.display = displayType);
    document.querySelector('html').style.overflow = 'hidden';
    this.getProductPricetotal();
  }

  componentDidMount() {
    this.setpagevisibility('none');
  }

  componentWillUnmount() {
    this.setpagevisibility('block');
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

  openDetails = (name) => {
    this.props.history.push({pathname: `/product/${name}`});
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
          <Container fluid id="checkoutcontainer" className="pt-2 mb-5">
            <Row>
            <Col sm={12} md={4} lg={4} className="p-3">
                <Card>
                  <Card.Header className="card-header">Total Price : {this.state.totalPrice}</Card.Header>
                  <Card.Footer className="m-2 border-0">
                    <Button variant="success" className="w-100 d-block mb-3" onClick={this.proceedtopayment}>Checkout</Button>
                    <Button variant="light" className="w-100 d-block" onClick={() => this.reRoutetoHome('/')}>Back to Shopping</Button>                    
                  </Card.Footer>
                </Card>
              </Col>
              <Col md={8} sm={12} className="p-3" id="checkoutlist">
                { 
                  this.props.selectedProduct.length>0 && selectedProducts.map((product, index) => <Card key={index} className="mb-3" >
                  <Card.Body>
                    <Card.Title onClick={() => this.openDetails(product.name)} >{product.name}</Card.Title>
                    <Card.Text className="card-text">Price : Rs. {product.mrp}</Card.Text>
                    <Fragment>
                      <Button disabled= {product.count === 1} variant="secondary" onClick={() => this.countChange(product, 'decrease')}>-</Button>
                      <Button disabled variant="light">{product.count}</Button>
                      <Button onClick={() => this.countChange(product, 'increase')}>+</Button>
                      <Button variant="danger" onClick={()=> this.removeProduct(product.id)}>Remove</Button>
                    </Fragment>
                  </Card.Body>
                </Card>)
                }
              </Col>
              
            </Row>
          </Container>
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
