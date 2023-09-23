
import React from 'react';

function Btn({message,children}){
  return(
    <button onClick={()=>alert(message)}>{children}</button>
  )
  
}

function Event(){

    const eventHandler =()=>{
        alert('You just Clicked me')
    }

    return(
        <div style={{marginTop:"10%"}}>
            <button  onClick={eventHandler}>Submit</button>

            <button  onClick ={()=>alert('you just clicked me')}
            >Click me</button>

            <Btn message='playing' children ='play video' />
            <Btn  message ='gaming' children ='play game'/>
        </div>
    )

}

export default Event