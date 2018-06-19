import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Link, Redirect} from 'react-router-dom';


export class Delete extends React.Component{
    constructor(props){
        super();
        this.state = {
            deleted: true,
            error: " ",
          }
        this.routeParam = props.match.params.id;
    }

    componentWillMount(){
        // alert("Here");
        console.log("idplace1");
        var id = this.routeParam;
        console.log(id);

        const self = this;
        fetch('/delete/' + id, {
            // headers : new Headers(),
            // params:JSON.stringify({
            //     id:"5b18ffd20d1dc1376899d232",
            // }),
            headers: {"Content-Type": "application/json"}}).then((res) => res.json())
        .then(function(data){
            console.log(data);
            self.setState({deleted : true})
            
        }).catch((err)=>console.log(err))
    }


    render(){
        if (this.state.deleted) {
            return <Redirect to='/dashboard' />
          }
       return <div>
                <div id = 'leftside'>
                <Link to = {'/dashboard'} className = "link">Home </Link>
                <Link to = {'/addhobby'} className = "link">Add Hobby </Link>
                <Link to = {'/logout'} className = "link">Log Out </Link>
                </div>
            </div>
    }
}


