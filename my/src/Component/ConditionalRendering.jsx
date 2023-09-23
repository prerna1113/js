import React from 'react';


function Item({list,isTrue}){
  return(
   <li>
    {list} {isTrue && '^'}
   </li>
  )
}

 export default function ConditionalRendering() {
  return(
    <div>
      <h1>Sally's Packing List</h1>
      <Item 
      isTrue={true}
      list ='Packed Clothes'
      />

<Item 
      isTrue={true}
      list ='Packed Clothes'
      />
        <Item 
      isTrue={false}
      list ='Packed Clothes'
      />
    </div>
  )
}



