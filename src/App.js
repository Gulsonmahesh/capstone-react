import './App.css';
import Navbar from './components/layout/Navbar';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './components/product/ProductList';
import ProductDetails from './components/product/ProductDetails';
import Signup from './components/user/Signup';
import Login from './components/user/Login';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/productdetails/:id" component={ProductDetails} />
          <Route path= "/signup" component={Signup} />
          <Route path= "/login" component={Login} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
