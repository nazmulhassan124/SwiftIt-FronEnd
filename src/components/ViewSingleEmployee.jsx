import React, { Component } from 'react';
import { redirect } from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

class ViewSingleEmployee extends Component {


    constructor( props){
        super(props)
        this.state= {
          
        }
    }
    homepage (){
        redirect("../../addemp");
        console.log(" on click ")
    }


    render() {
        return (
            <div>
                
                <h1> This is single view page</h1>

                <button  className="btn btn-info "  ><Link to="/">Back
        
      </Link>  </button>
            </div>
        );
    }
}

export default ViewSingleEmployee;