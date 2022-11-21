import React, { useState } from "react"
import Form from "./components/Form"
import Todo from "./components/Todo"


function App() {
 const[data,setData]=useState([])
 const[todo,setTodo]=useState("")

 const handleChange=(e)=>{
  setTodo(e.target.value)
 }
const handleSubmit=(e)=>{
  e.preventDefault();
  setData([...data,{
    item:todo,staus:false
  }])
  setTodo("")
}

const handleDelete=(index)=>{
  data.splice(index,1)
  setData([...data])
}

  return (
    <div className="App">
    <>
    <h1>Todo</h1>
   <Form
   todo={todo}
   handleChange={handleChange}
   handleSubmit={handleSubmit}
   />
   {
    data&&
    data.map((item,index)=>{
      return(
        <Todo
        todoName={item.item}
        index={index}
        handleDelete={handleDelete}
        />
      )
    })
   }
    </>
    </div>
  );
}

export default App;
