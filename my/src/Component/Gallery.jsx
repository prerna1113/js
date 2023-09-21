

import React from 'react';
import Component from './Component';

function Gallery() {
    return(
        <div style={{}}>
            <h1>Amazing Scientists</h1>
           <div style={{display:'flex' ,border:'1px solid red'}}>
           <Component />
            <Component />
            <Component />

           </div>
           
        </div>
    )
}

export default Gallery;