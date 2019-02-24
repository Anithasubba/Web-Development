import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import SignupPage from './form/SignupPage';
import SigninPage from './form/SigninPage';
import './App.css';

class App extends Component{
    render() {
        return(
            <Router>
        
            <div className="App">
            <div className="App_Form">
            <div  className="FormTilte">
            <NavLink to="/sign-in" activeClassName="FormTitle__Link Active" className="FormTitle__Link">Sign In</NavLink> 
            or <NavLink exact to="/" activeClassName="FormTitle__Link Active"
            className="FormTitle__Link FormTitle__Link Active">Sign Up</NavLink>
            </div>

            
            <Route exact path="/" component={SignupPage} >
            </Route> 
            <Route path="/sign-in" component={{SigninPage}} >
            <h1>Sign In</h1>
            </Route>

            
            
            </div>
            
            </div>
         </Router>
        );
    }
}
export default App;
