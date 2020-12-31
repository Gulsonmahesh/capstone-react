import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import {lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initProducts } from './store/actions/productAction';
import Dashboard from './components/dashboard/Dashboard';
// import Footer from './components/layout/Footer';
import ErrorWrapper from './wrapper/ErrorWrapper';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import './App.css';

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
