import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Home from './Home'
import {BrowserRouter} from 'react-router-dom'


class EmployeeGet extends React.Component {
  constructor() {
    super()
    this.state = {
      empdata: [],
      newemp:[],
      Empid:"",
      Name:"",
      Gender:"",
      Designation:"",
      salary:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event){
    const{name,value} = event.target
    this.setState({[name] : value})
  }

  async handleClick(event) {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Empid: this.state.Empid,
        Name:this.state.Name,
        Gender:this.state.Gender,
        Designation: this.state.Designation,
        salary:this.state.salary })
    };
    const response = await fetch('http://localhost/EmployeeAPI/API/Employees', requestOptions)
    const json = await response.json();

      this.setState({
        empdata:this.state.empdata.concat([json])
        
    })
      event.preventDefault()
  }

  async componentDidMount() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const response = await  fetch("http://localhost/EmployeeAPI/API/Employees", {
      method: 'GET',
      headers: headers
    })
    const json = await response.json();
    this.setState({ empdata: json })

  }

  render() {
    const allemp = this.state.empdata.map(item =>
      <li>{item.Name}</li>
    )

    return (
      <div>
       
        <h3>Employee Details</h3>
        <ul>
          {allemp}
        </ul>
        <input type="text" placeholder="Enter ID" name="Empid" value={this.state.Empid} onChange={this.handleChange} />
        <input type="text" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.handleChange} />
        <input type="text" placeholder="Enter Gender" name="Gender" value={this.state.Gender} onChange={this.handleChange} />
        <input type="text" placeholder="Enter Designation" name="Designation" value={this.state.Designation} onChange={this.handleChange} />
        <input type="text" placeholder="Enter salary" name="salary" value={this.state.salary} onChange={this.handleChange} />
       <button type="button" onClick={this.handleClick}>Add Employee</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="container-fluid">
      <React.StrictMode>
    <BrowserRouter>
    <React.Fragment>
       
        <Home />
        {/* <Employeelist /> */}
      {/* <EmployeeGet /> */}
      </React.Fragment>
      </BrowserRouter>
      </React.StrictMode>
      
    </div>
  );
}

export default App;
