import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Link, Redirect} from 'react-router-dom';


export class UpdateHobby extends React.Component{
    constructor(props){
        super();
        this.state = {
            added: false,
            error: "  ",
          }
          this.addHobby = this.addHobby.bind(this);
    }

    addHobby(e){
        e.preventDefault();
        let hobby = document.getElementById('hobby').value;
        let username = localStorage.getItem("username");
       // let userid = "5b2226ae9a12c730a47ffd9d";

        const self = this;
            fetch('/addhobby', {
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify({
                    username: username,
                    //userid: userid,
                    hobby:hobby
                }),
                headers: {"Content-Type": "application/json"}
            }).then((res) => res.json())
            .then(function(data){

                if(data.success == true){
                    self.setState({ added: true });
                }
                else{
                    self.setState({ error: data.message });
                }
            console.log(data)} )
            .catch((err)=>console.log(err))
        }

    render(){
        if (this.state.added) {
            return <Redirect to='/dashboard' />
          }
       return <div>
           <body>
           <nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-4" >
      <label class="navbar-brand"  >   HoBase</label>
      <button  class ="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav ml-auto">
       <li class="nav-item active">
         <a class="nav-link" href={'/dashboard'}>HOME <span class="sr-only">(current)</span></a>
       </li>
      
       <li class="nav-item">
          <a class="nav-link btn btn-danger" href= {'/'} > LOG OUT</a>
        </li>

     </ul>

    </div>
    </nav>
           </body>
           
           <ol class="breadcrumb">
    <li class="breadcrumb-item"> <a href ={'/dashboard'}>Hobbies</a></li>
    <li class="breadcrumb-item active">UPDATE</li>
</ol>
                <div id = 'leftside'>
               
                
               
                </div>

                <div id = 'rightside'>
              {/* <form id = "login" onSubmit = {this.addHobby}>
                <h2 className = "title">Add Hobby</h2>
                <p>{this.state.error}</p>
                <label>Tell us what you like to to: </label>
                <input type = "text" id = "hobby" placeholder = "Enter hobby here" required />
                <input type = "submit" value = "Add Hobby" />
        </form>*/}
                <form id="login" onSubmit={this.addHobby}>
                <p>{this.state.error}</p>
    <div class="form-group">
        <label for="title"> <h2> update your hobby</h2> </label> 
        <input type="text" name="title" class="form-control" id = "hobby" placeholder = "Update the hobby here" required/>
    </div>
    <input type="submit" value="Update hobby" class="btn btn-success"/>
</form>
                </div>
            </div>
    }
}


