import React from 'react'
import  { useState } from 'react'
import axios from 'axios';
import Select from 'react-select'

const URL = "http://localhost:8080/empinfo";

function AddEmployeeFunctional() {

  const [emp_name , setEmp_name] = useState([]);
  const [age , setAge] = useState([]);
  const [gender , setGender] = useState([]);
  const [position , setPosition] = useState([]);
  const [salary , setSalary] = useState([]);
  const [join_date , setJoin_date] = useState([]);
  const [address , setAddress] = useState([]);


const options = [{value:"Male", label :"Male"},
  {value:"Female", label :"Female"},
  {value:"Other", label :"Other"}
];

  const saveData = (e) => {
    e.preventDefault();
    let employee = {emp_name: emp_name, age: age, gender: gender, active_status:1,employeeDetails:{ position:position , salary:salary,join_date: join_date ,address:address} };
   
    axios.post(URL+'/post', employee);
    
  
  };


  return (<>
  <h2 className="text-center">Add Employee By functional component</h2> <br /> <br />
  

  <hr />
<form>
<div className="row g-3">
      <div className="col">
      
      <div className="mb-3 row">
        <label  className="col-sm-3 col-md-2 col-form-label"   > Name</label>
        <div className="col-sm-9">
          <input type="text" placeholder='write name' className="form-control form-control-sm"   name="emp_name"
             onChange={(e)=>setEmp_name(e.target.value)}  />
        </div>
      </div>
    
      </div>
       <div className="col">
         <div className="mb-3 row">
          <label  className="col-sm-3 col-md-2 col-form-label"  >Age </label>
           <div className="col-sm-9">
          <input type="number" placeholder='write age' className="form-control form-control-sm"   name="age"
           onChange={(e)=>setAge(e.target.value)}   />
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
           onChange={(e)=>setGender(e.target.value)}   />
            {/* <Select options={options}  name="gender"   defaultValue={gender} placeholder='Select gender' onChange={setGender}   /> */}
           
        </div>
      </div>
    
      </div>
       <div className="col">
         <div className="mb-3 row">
          <label  className="col-sm-3 col-md-2 col-form-label"  >Position</label>
           <div className="col-sm-9">
          <input type="text" placeholder='write positin' className="form-control form-control-sm"  name="position" 
          onChange={(e)=>setPosition(e.target.value)}   />
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
          onChange={(e)=>setSalary(e.target.value)}  />
        </div>
      </div>
    
      </div>
       <div className="col">
         <div className="mb-3 row">
          <label  className="col-sm-3 col-md-2 col-form-label"  >Join Date</label>
           <div className="col-sm-9">
          <input type="date" placeholder='Date of join' className="form-control form-control-sm"   name="join_date" 
           onChange={(e)=>setJoin_date(e.target.value)}   />
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
          onChange={(e)=>setAddress(e.target.value)}   />
        </div>
      </div>
    
      </div>
       <div className="col">
         <div className="mb-3 row">
         <label  className="col-sm-3 col-md-2 col-form-label"  ></label>
           <div className="col-sm-9 text-end">
          <button className='btn btn-success btn-sm savebutton'   onClick={saveData} > Save</button>
          <button className='btn btn-danger btn-sm savebutton ms-2' > Cancel</button>
        </div>
      </div>
      </div>
    </div>
</form>



  </>
    
  )
}

export default AddEmployeeFunctional