 import React from 'react';

 import { people } from './data.js';
 
 export default function List() {
    const chemist = people.filter(people=>
        people.profession ==='chemist');

        const listItems = people.map(people=>
            <li key={people.id}>
                <img  alt ="people.name"/>
                <p><b>{people.name}</b>
                profession:{people.profession}
                </p>
            </li>)
  
   return <ul>{listItems}</ul>;
 }
 