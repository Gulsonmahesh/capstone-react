import React, { Component } from 'react';
import {lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ErrorWrapper from './wrapper/ErrorWrapper';
import NavBar from './components/layout/Navbar';
import { initProducts } from './store/actions/productAction';
import { initFilter } from './store/actions/filterAction'
import Dashboard from './components/dashboard/Dashboard';
// import Footer from './components/layout/Footer';
import Login from './components/user/Login';
import Signup from './components/user/Signup';

class App extends Component {
  componentDidMount(){
    this.props.initFilter();
    this.props.initProducts();
  }
  render() {
    const loginStatus = this.props.user.loginStatus;
    return (
      <ErrorWrapper>
        <Router>
          <Suspense fallback="Loading">
          <NavBar loginStatus= {loginStatus} />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/product/:name" component={lazy(() => import ('./components/product/ProductDetails'))} />
            <Route path="/addproduct" component={lazy(() => import ('./components/product/Addproduct'))} />
            <Route path="/editproduct/:id" component={lazy(() => import ('./components/product/Addproduct'))} />
            <Route path="/Summary" component={lazy(() => import ('./components/product/Summery'))} />
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
    initProducts: () => dispatch(initProducts()),
    initFilter: () => dispatch(initFilter())
  }
}

const mapStateToProps = state => {
  return {    
    user: state.auth ? state.auth : false
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
