import React, { Component } from 'react';
import {Login} from './components/login';
import {SignUp} from './components/signup';
import {AddHobby} from './components/addhobby';
import {UpdateHobby} from './components/updatehobby';
import {Dashboard} from './components/dashboard';
import {Delete} from './components/delete';
import {Edit} from './components/edithobby';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
//import {Button} from 'react-bootstrap';

class App extends Component {

  render() {
    
    
    return (
      
      <BrowserRouter>
      <Switch>
        <Route exact path = {'/'} component = {Login}></Route>
        <Route path = {'/register'} component = {SignUp}></Route>
        <Route path = {'/addhobby'} component = {AddHobby}></Route>
        <Route path = {'/dashboard'} component = {Dashboard}></Route>
        <Route path = {'/delete/:id'} component = {Delete}></Route>
        <Route path = {'/edit/:id'} component = {Edit}></Route>
        <Route path = {'/updatehobby'} component = {UpdateHobby}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));






/*import React, { Component } from "react";
import logo from './logo.svg';
import './App.css'; 
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
      
          
      <Form/>
      </div>
    );
  }
}

export default App;*/
