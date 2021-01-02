import React, { Component } from 'react';
import {lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ErrorWrapper from './wrapper/ErrorWrapper';
import Navbar from './components/layout/Navbar';
import { initProducts } from './store/actions/productAction';
import Dashboard from './components/dashboard/Dashboard';
// import Footer from './components/layout/Footer';
import Login from './components/user/Login';
import Signup from './components/user/Signup';

class App extends Component {
  componentDidMount(){
    this.props.initProducts();
  }
  render() {
    return (
      <ErrorWrapper>
        <Router>
          <Suspense fallback="Loading">
          <Navbar loginStatus= {this.props.user.loginStatus} />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/product/:name" component={lazy(() => import ('./components/product/ProductDetails'))} />
            <Route path="/addproduct" component={lazy(() => import ('./components/product/Addproduct'))} />
            <Route path= "/signup" component={ Signup } />
            <Route path= "/login" component={ Login }  />
            <Route path= "/checkout" component={ lazy(() => import ('./components/product/Checkout')) }  />
          </Switch>
          </Suspense>
        </Router>
        {/* <Footer /> */}
      </ErrorWrapper>
    );
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    initProducts: () => dispatch(initProducts())
  }
}

const mapStateToProps = state => {
  return {    
    user: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
