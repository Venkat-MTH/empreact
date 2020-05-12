import React from 'react'
import Login from './Login'

function Home({name}:any) {
    console.log("venky"+name)
    return (
        <div className="container-fluid">
            
            <h3 className="text-center">Welcome to Employee Details Systems</h3>
        <Login />
           
        </div>
    )
}

export default Home;