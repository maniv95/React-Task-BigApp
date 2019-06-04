/*eslint-disable*/
import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import login from './Login';
import registration from './Register';
import TableData from './TableData';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import DragNDrop from './DragNDrop';
class App extends Component{
  render() {
    return ( 
      <Switch>
        <Route exact path="/" component={LandingPage} /> 
        <Route  path="/Login" component={login} />  
        <Route  path="/Register" component={registration} /> 
        <Route  path="/HomePage" component={HomePage} />   
        <Route  path="/Table" component={TableData} />
        <Route  path="/DnD" component={DragNDrop} /> 
      </Switch>
    )
  }
}

export default App;
