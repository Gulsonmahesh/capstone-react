import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import {lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/layout/Footer';
import ErrorWrapper from './wrapper/ErrorWrapper';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import './App.css';

class App extends Component {
  render() {
    return (
      <ErrorWrapper>
        <Router>
          <Suspense fallback="Loading">
          <Navbar loginStatus= {this.props.user.loginStatus} />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/productdetails/:id" component={lazy(() => import ('./components/product/ProductDetails'))} />
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
const mapStateToProps = state => {
  return {    
    user: state.auth
  }
}

export default connect(mapStateToProps)(App);
