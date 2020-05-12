import React from 'react'
import { navigate } from '@reach/router'
import {Redirect} from 'react-router-dom'

interface Istate {
    username: string,
    password: string,
    [key: string]: any,
    redirect: boolean
}

class Login extends React.Component<{}, Istate>{
    constructor(prop: any) {
        super(prop)
        this.state = {
            username: "",
            password: "",
            redirect:false
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

   async handleClick(event:any){
       event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `grant_type=password&username=${this.state.username}&password=${this.state.password}`
        
        };
        const response = await fetch('http://testheartapi.promisinghearts.com/token', requestOptions)
        const json = await response.json();
        console.log(json.access_token)
        document.cookie = 'Bearer=' + json.access_token
      this.setState({redirect:true})
      
      navigate('/Employeelist/')
        
    }

    handleChange(event: any) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {

        return (
            <div>
                
            <form onSubmit={this.handleClick}>
             
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" placeholder="Username" name="username" className="form-control col-md-3" value={this.state.username} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>EmpName:</label>
                    <input type="text" placeholder="password" name="password" className="form-control col-md-3" value={this.state.password} onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            
            </form>
            </div>
        )
    }

}

export default Login