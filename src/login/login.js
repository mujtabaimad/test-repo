import './login.css';
import React,{Component} from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

  class Login extends Component {
      render(){
          return(
            <div className="container" style={{paddingTop:"5%"}}>
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                    </div>
                    <div className="card-body">
                    
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="username"/>
                                
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="password"/>
                            </div>
                            <div className="row align-items-center remember">
                            Remember Me :<input type="checkbox"/>
                            </div>
                            <div className="form-group">
                                <Link to="/home" type="submit" className="btn float-right login_btn"> Login </Link>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?<a href="#">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          )
      }
  }

  export default Login;