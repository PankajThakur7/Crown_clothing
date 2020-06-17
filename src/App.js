import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/page/homepage/homepage.component';
import ShopPage from './components/shop/shop.compononet';

function App() {
  return (
    <div className="App">
  <Switch>
  <Route exact  path="/" component={Homepage}></Route>
  <Route exact path="/shop" component={ShopPage}></Route>
  </Switch>
    </div>
  );
}

export default App;
