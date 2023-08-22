import React, { Component } from 'react';
import { redirect } from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  import EmployeeService from '../services/EmployeeService'

class ViewSingleEmployee extends Component {


    constructor( props){
        super(props)
        this.state= {
          //  id: this.props.match.params.id,
         id:5,
        
            employee:{},
            employeedetails:{}
        }
    }

    componentDidMount(){
        EmployeeService.getbyId(this.state.id).then((res) => {
            this.setState({ employee: res.data});
            this.setState({employeedetails:res.data.employeeDetails})
          
          
        });
    }


    homepage (){
        redirect("../../addemp");
        console.log(" on click ")
    }


    render() {
        return (
            <div>
                
                

                <button  className="btn btn-info "  ><Link to="/">Go Back</Link>  </button>


                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <div className='col-md-4'> Employee  Name: </div>
                            <div className='col-md-6'> { this.state.employee.emp_name }</div>
                        </div>
                        <div className = "row">
                            <div className='col-md-4'> Employee age: </div>
                            <div className='col-md-6'> { this.state.employee.age }</div>
                        </div>
                        <div className = "row">
                            <div className='col-md-4'> Employee gender: </div>
                            <div className='col-md-6'> { this.state.employee.gender }</div>
                        </div>
                        <div className = "row">
                            <div className='col-md-4'> Employee Position: </div>
                            <div className='col-md-6'> { this.state.employeedetails.position}</div>
                        </div>
                       
                        <div className = "row">
                            <div className='col-md-4'> Employee Salary: </div>
                            <div className='col-md-6'> { this.state.employeedetails.salary }</div>
                        </div>
                        <div className = "row">
                            <div className='col-md-4'> Employee Address: </div>
                            <div className='col-md-6'> { this.state.employeedetails.address }</div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default ViewSingleEmployee;