import React from 'react'

class AddEmployee extends React.Component {
    constructor() {
        super()
        this.state = {
            Empid: "",
            Name: "",
            Gender: "",
            Designation: "",
            salary: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    async handleClick(event) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Empid: this.state.Empid,
                Name: this.state.Name,
                Gender: this.state.Gender,
                Designation: this.state.Designation,
                salary: this.state.salary
            })
        };
        const response = await fetch('http://localhost/EmployeeAPI/API/Employees', requestOptions)
        const json = await response.json();

        // this.setState({
        //     empdata: this.state.empdata.concat([json])
        // })
        event.preventDefault()
    }

    render() {
        return (
            <div className="container row">

                <div className="form-group">
                    <label>EmpID:</label>
                    <input type="text" placeholder="Enter ID" name="Empid" className="form-control" value={this.state.Empid} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>EmpName:</label>
                    <input type="text" placeholder="Enter Name" name="Name" className="form-control" value={this.state.Name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <input type="text" placeholder="Enter Gender" name="Gender" className="form-control" value={this.state.Gender} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Designation:</label>
                    <input type="text" placeholder="Enter Designation" name="Designation" className="form-control" value={this.state.Designation} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Salary:</label>
                    <input type="text" placeholder="Enter salary" name="salary" className="form-control" value={this.state.salary} onChange={this.handleChange} />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Add Employee</button>

            </div>
        )
    }

}

export default AddEmployee;