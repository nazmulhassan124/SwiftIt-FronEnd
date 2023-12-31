import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

  
class EmloyeeListComponent extends Component {

    constructor( props){
        super(props)
        this.state= {
            employees:[],
            date: new Date(),
        }
    }

  


    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
         setInterval(this.tick, 1000);
    }
    tick=()=>{
        this.setState({
            date:new Date(),
            
        })
       
    }


    deleteEmployee(id){
         EmployeeService.deleteEmployee(id).then( res => {
             this.setState({employees: this.state.employees.filter(employee => employee.emp_id !== id)});
         });
    }
    viewEmployee(id){

        
        // const match = useMatch(
        //     "/empview/:empid/view"
        //   );
        //   match.params.empid; 
         
        
     //    this.props.history.push(`/viewemp/${id}`);
        console.log("Id :"+ id)
    }
    editEmployee(id){
        // this.props.history.push(`/add-employee/${id}`);
    }


    render() {
        
        return (
            <div>
                

                <h2 className="text-center">Employees List</h2>
                <h4 className="text-end me-5" >Time:{this.state.date.toLocaleTimeString()} </h4>
                 
                
               <br /> <br />  
               
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>  Id</th>
                                    <th>   Name</th>
                                    <th>   Age</th>
                                    <th>Gender</th>
                                    <th>Position</th>
                                    <th>Salary</th>
                                  
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.emp_id} >
                                            <td> {employee.emp_id}</td>
                                             <td> { employee.emp_name} </td>   
                                             <td> {employee.age}</td>
                                             <td> {employee.gender}</td>
                                             <td>{employee.employeeDetails.position}</td>
                                             <td>{employee.employeeDetails.salary}</td>
                                             
                                             
                                              <td>
                                                 <button onClick={ () => this.editEmployee(employee.emp_id)} className="btn btn-info btn-sm">Edit </button>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.emp_id)} className="btn btn-info btn-sm" > <Link to={`/viewemp/${employee.emp_id}`} reloadDocument={true}>View </Link> </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.emp_id)} className="btn btn-danger btn-sm">Delete </button>
                                             </td> 
                                        </tr>
                                    )
                                } 
                            </tbody>
                        </table>

                 </div>

            </div>

           
        );
    }
}

export default EmloyeeListComponent;