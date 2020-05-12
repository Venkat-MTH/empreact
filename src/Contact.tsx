import React from 'react'

function Contact(props:any){
    return(
    <div>
      <p>  {props.match.params.id}</p>
        <h3>Contact here!!!</h3>
    </div>
    )
}

export default Contact