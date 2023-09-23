

import React, { useState } from 'react';
import {sculptureList} from './Data.jsx'

function State(){

    const [index,setIndex] = useState(0)

    function handleEvent(){
        
        setIndex(index+1);
        

    }
    let sculp = sculptureList[index];

    
    return (
        <div>
          
            <button onClick ={handleEvent}>Next</button>
        <h1>
            <li>{sculp.name} by </li>
            {sculp.artist}
        </h1>

        <h2>({index+1} of {sculptureList.length})</h2>

        <img  src= {sculp.url}/>
        <p>{sculp.description}</p>


        </div>
    )
}

export default State;