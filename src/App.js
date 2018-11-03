import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Home from './home/home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {test_api} from './actions/test_action';

export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      test : "loading..",
    }
  }
  componentWillMount(){
    test_api().then(
      (response)=>{
        this.setState({test:response.data.title});
        console.log(response.data.id);
    }
    );
  }

  render() {
    return (
      <Router>
      <div>
        <h1>{this.state.test}</h1>
        <Route path="/login" component={Login} />
        <Route path="/home" exact component={Home} />
      </div>
      </Router>
    );
  }
}


