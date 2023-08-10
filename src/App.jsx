import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmloyeeListComponent from'./components/EmloyeeListComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
   
      <div>
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Employee List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Add  Employee</a>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>

      </div>
      
     
      
      <div >

<EmloyeeListComponent></EmloyeeListComponent>

      </div>
       
    </div>
   
  )
}

export default App
