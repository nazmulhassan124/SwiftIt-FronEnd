import React, { Component } from 'react';

class Header extends Component {

    constructor( props){
        super(props)
        this.state= {
          
        }
    }

    render() {
        return (
            <div className='container'>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Swift It Ltd</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/addemp">Add  Employee</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/addemp2">Add  Employee 2</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">Employee List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/list2">Employee List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/temparature">Temparature</a>
        </li>

      
       
       
      </ul>
      
    </div>
  </div>
</nav>

            </div>
        );
    }
}

export default Header;