import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Sidebar from './Components/Sidebar/sidebar';
import Footer from './Components/Footer/footer';
import Dashboard from './Containers/Dashboard/dashboard';
import Order from './Containers/Orders/order';
import Product from './Containers/Products/product';
import Customer from './Containers/Customers/customer';
import Service from './Containers/Services/service';
import Notification from './Containers/Notifications/notification';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
            <Sidebar/>
            <div className="wrapper">
                <Header/>
                <div className="main">
                  <div className="container-fluid">
                    <Switch>
                      <Route exact={true} path="/"> <Dashboard/> </Route>
                      <Route path="/orders"> <Order/> </Route>
                      <Route path="/products"> <Product/> </Route>
                      <Route path="/customers"> <Customer/> </Route>
                      <Route path="/services"> <Service/> </Route>
                      <Route path="/notifications"> <Notification/> </Route>
                    </Switch>
                  </div> 
                </div>
                <Footer/>
            </div>
        </div>
    </Router>
  );
}

export default App;
