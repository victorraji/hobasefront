import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';


export class Dashboard extends React.Component{
    constructor(props){
        super();
        this.state = {
            list : []
        }
    }

    componentWillMount(){
        // alert("Here");
        console.log("Here");
        //var id = "5b2226ae9a12c730a47ffd9d";
        console.log(this.state.list);
            const username = localStorage.getItem("username");
            const email = localStorage.getItem("email");
            const phonenumber= localStorage.getItem("phonenumber");
            console.log(username);
            console.log(email);
            console.log(phonenumber)
        // var hobbies = [];

        const self = this;
        fetch('/displayhobbies', {
            method:'POST',
             headers : new Headers(),
             body:JSON.stringify({
                /* id:'5b2226ae9a12c730a47ffd9d'*/
                 username:localStorage.getItem("username")
             }),
            headers: {"Content-Type": "application/json"}}).then((res) => res.json())
            // const self = this;
        .then(function(data){
            console.log(data)
            self.setState({
                list : data
                
            })
            
        
        }).catch((err)=>console.log(err))
    }

    // componentWillMount() {
    //     console.log(this.state.list);
    //     var id = "5b18ffd20d1dc1376899d232";
    //     fetch('/view/' + id).then(data => {
    //         console.log("Hereeee");
    //         this.setState({list: data.data })})
    //         .catch(function(error) {
    //             console.log(error);
    //         });
    //         console.log(this.state.list);

    //     }
    
    render(){
       return <div>
            <head>
<link rel="stylesheet" type="text/css" href="App.css"/>
         </head> 
           <body  >
               
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
                <div id = 'leftside'>
               {/* <Link to = {'/dashboard'} className = "link">Home </Link>
                <Link to = {'/addhobby'} className = "link">Add Hobby </Link>*/}
                <Link to = {'/addhobby'} className = "link" class="btn btn-success" >ADD HOBBY </Link>
                </div>


                <div id = 'rightside'>
                <h1 class="display-2  ">Hello  </h1> 
                { this.state.list.map(e => (
                        <div>
                        </div>

                    ))}
              
              
                {/* 
                        <p>Sample hobby 1</p>
                        <Link to = {'//'} className = "edit">Edit </Link>
                        <Link to = {'//'} className = "del">Delete </Link>
                        <p>Sample hobby 2</p>
                        <Link to = {'//'} className = "edit">Edit </Link>
                        <Link to = {'//'} className = "del">Delete </Link>
                   */}
                {/* <p>{this.state.hobbies}</p> */}


               
<table class="table table-striped">
    <thead>
        <tr>
            <th>List of your hobbies</th>
          
       </tr>
    </thead>
    { this.state.list.map(e => (
    <tbody>
    <div>
    
            <tr>
                <td>
                {e.hobby}
                </td>
                <td>
                       
                    <a href = {'/edit/' + e.id} className = "edit" class ="btn btn-primary">  Edit </a>
                   
                     <a href = {'/delete/' + e.id}  className = "del" class ="btn btn-danger" >   Delete </a>     
                </td>
            </tr>
           
         
          </div>
        </tbody>
        ))}

</table>
                   
                   
                    { /* this.state.list.map(e => (
                        <div>
                        <h6 class= "display-4">{e.hobby}</h6>
                        <Link to = {'/edit/' + e.id} className = "edit" class ="btn btn-primary">  Edit </Link>
                        <Link to = {'/delete/' + e.id}  className = "del" class ="btn btn-danger" >   Delete </Link>
                        </div>

                    ))}
                */ }
                

                {/* {this.getHobbies()} */}
                </div>
            </div>
    }
}


