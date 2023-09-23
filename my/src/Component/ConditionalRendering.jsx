import React from 'react'

function Item({isTrue,list}){
  return(
    <li>{list}</li>
  )
}

function ConditionalRendering() {
  return (
  <div>
   <Item 
   isTrue='true'
   list='I am not gonna come'   />

<Item 
   isTrue='true'
   list='I am not gonna come'   />

<Item 
   isTrue='true'
   list='I am not gonna come'   />

  </div>
  )
}

export default ConditionalRendering