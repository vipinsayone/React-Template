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
import Login from './Containers/Login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {

  const LoggedRoute = ({component: Component, path, ...rest}) => {
    const isLoggedIn = localStorage.getItem('token');
    return (
      <Route {...rest} render = {
        props => {
          return isLoggedIn != null ? (
            <Component {...props}/>
          ) :

            (
              <Redirect 
                to ={{pathname: "/login"}}
              />
            );
        }
      }/>
    )
  };

  const LoginLayout = ({children}) => {
    return (
      <div>
        {children}
      </div>
    )};


  const LoginLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <LoginLayout>
                <Component {...matchProps} />
            </LoginLayout>
        )} />
    )
  };

  const AdminLayout = ({children}) => {
    return (
    <div className="wrapper-out">
      <Sidebar/>
      <div className="wrapper">
          <Header/>
          <div className="main">
            <div className="container-fluid">
              {children}
            </div> 
          </div>
          <Footer/>
      </div>
    </div>
    )};

    const AdminLayoutRoute = ({ component: Component, path: path, exact, ...rest }) => {
      return (
          <Route {...rest} render={matchProps => (
              <AdminLayout>
                  <LoggedRoute path={path} component={Component} {...matchProps}/>
              </AdminLayout>
          )} />
      )
    };


  return (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path="/"> 
                    <Redirect to="/" />
                </Route>
            </Switch>
            <Switch>
                <LoginLayoutRoute exact path={["/","/login"]} component={Login} />
                <AdminLayoutRoute exact={true} path="/dashboard" component={Dashboard}/>
                <AdminLayoutRoute path="/orders" component={Order}/>
                <AdminLayoutRoute path="/products" component={Product}/>
                <AdminLayoutRoute path="/customers" component={Customer}/>
                <AdminLayoutRoute path="/services" component={Service}/>
                <AdminLayoutRoute path="/notifications" component={Notification}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
