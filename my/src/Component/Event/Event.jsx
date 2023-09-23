
import React from 'react';

function Event(){

    const eventHandler =()=>{
        alert('You just Clicked me')
    }

    return(
        <div style={{marginTop:"10%"}}>
            <button  onClick={eventHandler}>Submit</button>
        </div>
    )

}

export default Event