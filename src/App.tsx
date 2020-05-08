import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Home from './Home'
import {BrowserRouter} from 'react-router-dom'



function App() {
  return (
    <div className="container-fluid">
      <React.StrictMode>
    <BrowserRouter>
    <React.Fragment>
       
        <Home name = "venky"/>
        {/* <Employeelist /> */}
      {/* <EmployeeGet /> */}
      </React.Fragment>
      </BrowserRouter>
      </React.StrictMode>
      
    </div>
  );
}

export default App;
