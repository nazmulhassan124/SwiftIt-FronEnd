import { useState } from 'react'

import './App.css'
import EmloyeeListComponent from'./components/EmloyeeListComponent'
import Header from './components/Header'
import AddEmployee from './components/AddEmployee'
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import ViewSingleEmployee from './components/ViewSingleEmployee'


function App() {
 

  return (
    
       
    
    <div className='container'>
   
   
   
       <Header></Header>
       <Router>
       <Routes>

       <Route exact path="/" element={<EmloyeeListComponent />}/>
       <Route exact path="/addemp" element={<AddEmployee />}/>
       {/* <Route exact path="/viewemp/:empid/view" element={<ViewSingleEmployee />}/> */}
       <Route exact path="/viewemp" element={<ViewSingleEmployee />}/>
       
       </Routes>
       </Router>
    {/* <AddProduct></AddProduct>
    
      <EmloyeeListComponent></EmloyeeListComponent>   
      */}
    

    </div>
    
  
  )
}

export default App
