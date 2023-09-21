function TodoList(){
    const person={
        name:'gergia',
        theme:{
            backgroundColor:'black',
            color:'pink'
        }
    }
    return (
        <div style={person.theme}>

<h1>{person.name}</h1>
<img src="https://i.imgur.com/MK3eW3Am.jpg" alt ="Katherine johnson" />

<ul>
    <li>video editing</li>
    <li>lecture preparation</li>
    <li>node js</li>
    </ul>   
   </div>
    )
}

export default TodoList;;
