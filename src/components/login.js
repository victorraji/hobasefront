import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Dashboard} from './dashboard';
import {Button} from 'react-bootstrap';
import './../App.css';


export class Login extends React.Component{

    
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      error: " ",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

    handleSubmit(e){
        e.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('pass-word').value;
        
        const self = this;
            fetch('/signin', {
                
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify({
                    username:username,
                    password:password

                }),
                headers: {"Content-Type": "application/json"}
            }).then((res) => res.json())
            .then(function(data){
                console.log(data )
                if(data.success == true){
                    self.setState({ isLoggedIn: true });
                    localStorage.setItem("username",data.usernamedb);
                    localStorage.setItem("email",data.emaildb);
                    localStorage.setItem("phonenumber",data.phonenumberdb)
                    console.log(data )
                }
                else{
                    self.setState({ error: data.message });
                }
            } )
            .catch((err)=>console.log(err))
        }


    render(){
        if (this.state.isLoggedIn) {
            return <Redirect to='/dashboard' />
          }

       return <div>
               <h1 className ="display-4">WELCOME TO HoBase</h1>
               <p className ="mb-4">This is an app for managing Hobbies</p>
                <form  className="formbody" id = "login" onSubmit = {this.handleSubmit}>
                <h2 className = "title">Login</h2>
                <p>{this.state.error}</p>
                <input type = "text" id = "username" placeholder = "username" />
                <p></p>
                <input type = "password" id = "pass-word" placeholder = " Password" />
                {/*<input type = "submit" value = "Login" />*/}
                <p></p>
                <button className="btn btn-primary"> LOGIN </button> 
                <p></p>
                <p className="Bod"><i>Not yet registered on HoBase? Sign Up <Link to = {'/register'}>here </Link></i></p>
            
            </form>
            </div>
    }

    }


