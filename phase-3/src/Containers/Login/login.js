import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);

        var token = localStorage.getItem("token")
        let isLoggedIn = true
        if(token == null) {
            isLoggedIn = false
        }

        this.state = {
            email: '',
            password: '',
            isLoggedIn
        }
    }

    onChangetext = (e) => {
        this.setState ({
            [e.target.name]: e.target.value,
        });
    }

    login = () => {
        var { email, password } = this.state
        if(email == "demo" && password == "abc"){
            localStorage.setItem("token", "testtoken")
            this.setState({
                isLoggedIn : true
            });
        }
        else {
            alert("Enter email and password to login")
        }
    }

    render() {
        if(this.state.isLoggedIn){
            return <Redirect to ="/dashboard"/>
        }
        return(
            <div className="login-wrapper">
                <div className="login-box">
                    <h3 className="text-center text-uppercase">React Demo</h3>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.onChangetext}/>
                        {/* <span className="danger">Please Enter Email</span> */}
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.onChangetext} />
                    </div>
                    <button className="btn btn-primary" onClick={this.login}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;