import './App.css';
import Navbar from './components/layout/Navbar';
import {lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/layout/Footer';
import ErrorWrapper from './wrapper/ErrorWrapper';
import Login from './components/user/Login';
import Signup from './components/user/Signup';

function App(props) {
  return (
    <ErrorWrapper>
      <Router>
        <Suspense fallback="Loading">
        <Navbar loginStatus= {props.user.loginStatus} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/productdetails/:id" component={lazy(() => import ('./components/product/ProductDetails'))} />
          <Route path= "/signup" component={ Signup } />
          <Route path= "/login" component={ Login }  />
        </Switch>
        </Suspense>
      </Router>
      <Footer />
    </ErrorWrapper>
  );
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(App);
