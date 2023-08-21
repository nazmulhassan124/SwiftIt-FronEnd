import React, { Component } from 'react';

import EmployeeService from '../services/EmployeeService'



class AddEmployee extends Component {

  

    constructor(props) {
      
        super(props)
        this.state = {
            emp_name: '',
            age: '',
            gender: '',
            position: '',
            salary: '',
            join_date:'',
            address:''
            

        }
     


        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderlHandler = this.changeGenderlHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeSalarylHandler = this.changeSalarylHandler.bind(this);
        this.changeJoinDateHandler = this.changeJoinDateHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);

        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        
    }
   

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {emp_name: this.state.emp_name, age: this.state.age, gender: this.state.gender, active_status:1 ,employeeDetails:{ position:this.state.position , salary:this.state.salary,join_date:this.state.join_date ,address:this.state.address} };
        console.log('employee => ' + JSON.stringify(employee));


        EmployeeService.createEmployee(employee).then(res =>{
          // this.props.history.push('/'); 
          history.push('/'); 
                 });

        // step 5
        // if(this.state.id === '_add'){
        //     EmployeeService.createEmployee(employee).then(res =>{
        //         this.props.history.push('/employees');
        //     });
        // }else{
        //     EmployeeService.updateEmployee(employee, this.state.id).then( res => {
        //         this.props.history.push('/employees');
        //     });
        // }
    }


    changeNameHandler= (event) => {
        this.setState({emp_name: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeGenderlHandler= (event) => {
        this.setState({gender: event.target.value});
    }

    changePositionHandler= (event) => {
        this.setState({position: event.target.value});
    }

    changeSalarylHandler= (event) => {
        this.setState({salary: event.target.value});
    }
    changeJoinDateHandler= (event) => {
        this.setState({join_date: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

  

    render() {

        return (
            <div>

             

<h2 className="text-center">Add Employee</h2> <br /> <br />

<hr />
<form>
<div className="row g-3">
      <div className="col">
      
      <div className="mb-3 row">
        <label  className="col-sm-3 col-md-2 col-form-label"   > Name</label>
        <div className="col-sm-9">
          <input type="text" placeholder='write name' className="form-control form-control-sm"   name="emp_name"
            value={this.state.emp_name} onChange={this.changeNameHandler}  />
        </div>
      </div>
    
      </div>
       <div className="col">
         <div className="mb-3 row">
          <label  className="col-sm-3 col-md-2 col-form-label"  >Age </label>
           <div className="col-sm-9">
          <input type="number" placeholder='write age' className="form-control form-control-sm"   name="age"
           value={this.state.age} onChange={this.changeAgeHandler} />
        </div>
      </div>
      </div>
    </div>

    
<div className="row g-3">
      <div className="col">
      
      <div className="mb-3 row">
        <label  className="col-sm-3 col-md-2 col-form-label"  > Gender</label>
        <div className="col-sm-9">
          <input type="text" placeholder='Write Gender' className="form-control form-control-sm"   name="gender"
           value={this.state.gender} onChange={this.changeGenderlHandler} />
        </div>
      </div>
    
      </div>
       <div className="col">
         <div className="mb-3 row">
          <label  className="col-sm-3 col-md-2 col-form-label"  >Position</label>
           <div className="col-sm-9">
          <input type="text" placeholder='write positin' className="form-control form-control-sm"  name="position" 
           value={this.state.position} onChange={this.changePositionHandler} />
        </div>
      </div>
      </div>
    </div>

    
<div className="row g-3">
      <div className="col">
      
      <div className="mb-3 row">
        <label  className="col-sm-3 col-md-2 col-form-label"  >Salary</label>
        <div className="col-sm-9">
          <input type="number" placeholder='write salary' className="form-control form-control-sm"   name="salary" 
           value={this.state.salary} onChange={this.changeSalarylHandler}/>
        </div>
      </div>
    
      </div>
       <div className="col">
         <div className="mb-3 row">
          <label  className="col-sm-3 col-md-2 col-form-label"  >Join Date</label>
           <div className="col-sm-9">
          <input type="date" placeholder='Date of join' className="form-control form-control-sm"   name="join_date" 
           value={this.state.join_date} onChange={this.changeJoinDateHandler} />
        </div>
      </div>
      </div>
    </div>



    <div className="row g-3">
      <div className="col">
      
      <div className="mb-3 row">
        <label  className="col-sm-3 col-md-2 col-form-label"  >Address</label>
        <div className="col-sm-9">
          <input type="text" placeholder='write address' className="form-control form-control-sm"  name="address"
          value={this.state.address} onChange={this.changeAddressHandler}  />
        </div>
      </div>
    
      </div>
       <div className="col">
         <div className="mb-3 row">
         <label  className="col-sm-3 col-md-2 col-form-label"  ></label>
           <div className="col-sm-9 text-end">
          <button className='btn btn-success btn-sm savebutton'  onClick={this.saveOrUpdateEmployee}  > Save</button>
          <button className='btn btn-danger btn-sm savebutton ms-2' > Cancel</button>
        </div>
      </div>
      </div>
    </div>
</form>
    <hr />

<br />

             

            </div>
        );
    }
}

export default AddEmployee;