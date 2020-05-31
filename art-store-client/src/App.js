import React from 'react';
import 'normalize.css'; // Note this;
import Home from './components/Home';
import Contact from './components/Contact';
import Customer from './components/Customer'
import Order from './components/Order';
import Product from './components/Products'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.scss'
import {Provider} from 'react-redux';
import store from './components/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path='/product' component={Product}/>
              <Route exact path='/order/:id' component={Order}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/Home' component={Home}/>
              <Route exact path ='/customer' component={Customer}/>
              <Route exact path='/'  component={Home}/>

            </Switch>
          </Router>
        </div>
    </Provider>
 );
}

export default App;
