import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Link, Redirect} from 'react-router-dom';
import {Dashboard} from './dashboard';


export class SignUp extends React.Component{
    constructor(props){
        super();
        this.state = {
          isLoggedIn: false,
          error: "  ",
        }
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(e){
        e.preventDefault();
        /*let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;*/
        let phonenumber = document.getElementById('phonenumber').value;
        let email = document.getElementById('email').value;
        let username = document.getElementById('username').value;
        let password = document.getElementById('pass-word').value;

        // console.log("Here");
        // // const self = this;
        // if(password != confirmpassword ){
        //     console.log("Here");
        //     console.log(password != confirmpassword);
        //     this.setState({ error: "Passwords dont match" });
        //     console.log(this.state);
        // }
        
        const self = this;
            fetch('/register', {
                
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify({
                   // firstname: firstname,
                   // lastname: lastname,
                    email: email,
                    phonenumber: phonenumber,
                    username:username,
                    password:password
                }),
                headers: {"Content-Type": "application/json"}
            }).then((res) => res.json())
            .then(function(data){
                if(data.success == true){
                self.setState ({isLoggedIn: true});
                    console.log(data);
                    alert("REGISTERATION COMPLETE : go back to login page to enter your details")
            }
                else{
                    self.setState({ error: data.message });
                }
                
            } )
            .catch((err)=>console.log(err))
        }

    render(){
        if (this.state.isLoggedIn) {
            return <Redirect to='/' />
          }
       return <div>
           <h1 class ="display-4">HoBase Registration Portal</h1>
               <p class ="mb-4"></p>
                <form id = "login" className="formbody" onSubmit = {this.handleRegister}>
                <h2 className = "title">SIGN UP</h2>
                
                <p>{this.state.error}</p>
                
               {/* <input type = "text" id = "firstname" placeholder = " firstname" required />*}
                 <input type = "text" id = "lastname" placeholder = "lastname" required />*/}
                


                <h5><i>Please fill out all fields</i></h5>

                <p>username              : <input type = "text" id = "username" placeholder = "username " required /><br/> <br/></p>
                <p>password :           <input type = "password" id = "pass-word" placeholder = "Password" required /><br/> <br/></p>
                <p>mobile phone number :<input type = "number" id = "phonenumber" placeholder = "phonenumber" required /><br/> <br/></p>
                <p>email address : <input type = "email" id = "email" placeholder = "email" required /><br/> <br/></p>
                {/* <input type = "password" id = "confirm-password" placeholder = "Confirm Password here" required /> */}
                <button class="btn btn-primary"> REGISTER </button> <br/> <br/>
                <p><i>Already registered? LOGIN In <Link to = {'/'}>here </Link></i></p>
            </form>
            </div>
    }
}


