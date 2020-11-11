import './App.css';
import Navbar from './components/layout/Navbar';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductDetails from './components/product/ProductDetails';
import Signup from './components/user/Signup';
import Login from './components/user/Login';
import Dashboard from './components/dashboard/Dashboard';

function App(props) {
  console.log(props);
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/productdetails/:id" component={ProductDetails} />
          <Route path= "/signup" component={Signup} />
          <Route path= "/login" component={Login} />
        </Switch>
      </Router>
    </Fragment>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.product.products
  }
}

export default connect(mapStateToProps)(App);
