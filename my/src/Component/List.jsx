 import React from 'react';

 import { people } from './data.js';
 
 export default function List() {
    const chemist = people.filter(person=>
        person.profession ==='chemist');

        const listItems = chemist.map(person=>
            
            <li key={person.id} >
               
                <img  alt ="person.name"/>
                <p><b>{person.name}</b>
                profession:{person.profession}
                </p>
               
            </li>
           )
  
   return <ul>{listItems}</ul>;
 }
 