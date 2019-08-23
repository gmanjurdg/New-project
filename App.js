import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import { Switch, Route } from "react-router-dom";
import Default from './Components/Default';
import RecipeCard from './Components/RecipeCard'


class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/RecipeCard" component={RecipeCard} />
            <Route component={Default} />
          </Switch>
      </React.Fragment>
    );
  }
}


export default App;   