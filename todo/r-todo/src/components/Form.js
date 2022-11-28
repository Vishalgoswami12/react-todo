import React, { useState } from "react"



function Form(props) {
  const  {data, setData} = props;
  const[todo,setTodo]=useState("")
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const trimmedStr = todo.trim(); 
    if(!trimmedStr.length) {
      setTodo("")
      return;
    }
    setData([...data,{
      item:todo,status:false
    }])
    setTodo("")
  }
  
  const handleChange=(e)=>{
    setTodo(e.target.value )
   }

    return (
      <>
      <form onSubmit={handleSubmit}>
        <input className="mt-top" type="text" placeholder="Add todo" value={todo} onChange={handleChange}/>
      </form>
      </>
    );
  }
  export default Form;