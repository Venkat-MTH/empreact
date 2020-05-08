import React from 'react'
import { Link } from "react-router-dom"

class Employeelist extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={
            empdata:[]
        }
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

    async handleDelete(id:number) {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        const response = await fetch('http://localhost/EmployeeAPI/API/Employees/'+id, requestOptions)

        let filteredArray = this.state.empdata.filter((item:any) => item.Empid !== id)
        this.setState({empdata: filteredArray});


       // const json = await response.json();
       
       // event.preventDefault();
       
    }

      render(){
          const emplist = this.state.empdata.map((item:any) =>
            <tr>
                <td>{item.Empid}</td>
                <td>{item.Name}</td>
                <td>{item.Gender}</td>
                <td>{item.Designation}</td>
                <td>{item.salary}</td>
                <td>
                
                    <button type="button" className="btn btn-danger" onClick={()=>this.handleDelete(item.Empid)}>Delete</button>
               
                </td>
              
            </tr>
            )
          return(
              <div className="container">
                  <Link to="/AddEmployee">
              <button type="button" className="btn btn-primary">Add New Employee</button>
              </Link>
              <table className="table">
                  <tr>
                  <th>EMPID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Designation</th>
                  <th>Salary</th>
                  <th>Delete</th>
                  </tr>
                  {emplist}
              </table>
              </div>
          )
      }
}

export default Employeelist