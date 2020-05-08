import React from 'react'

function Home({name}:any) {
    console.log("venky"+name)
    return (
        <div className="container-fluid">
            
            <h3 className="text-center">Welcome to Employee Details Systems</h3>
        
            <p>{name}</p>
        </div>
    )
}

export default Home;