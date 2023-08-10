import { useState } from 'react'

import './App.css'
import EmloyeeListComponent from'./components/EmloyeeListComponent'
import Header from './components/Header'
import AddEmployee from './components/AddEmployee'
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom';


function App() {
 

  return (
    
       
    
    <div className='container'>
   
   
   
       <Header></Header>
       <Router>
       <Routes>

       <Route exact path="/" element={<EmloyeeListComponent />}/>
       <Route exact path="/addemp" element={<AddEmployee />}/>
       </Routes>
       </Router>
    {/* <AddProduct></AddProduct>
    
      <EmloyeeListComponent></EmloyeeListComponent>   
      */}
    

    </div>
    
  
  )
}

export default App
