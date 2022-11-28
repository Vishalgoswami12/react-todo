import React, { useState } from "react"
import Form from "./components/Form"
// import Search from "./components/Search"
import Todo from "./components/Todo"

function App() {
 const[data,setData]=useState([])


  return (
    <div className="App">
    <>
    <h1>Todo</h1>
  
   <Form
   data={data}
   setData={setData}
   />
   {
    data&&
    data.map((item,index)=>{
      return(
        <Todo
        item={item}
        index={index}
        data={data}
        setData={setData}
        />
      )
    })
   }
    </>
    </div>
  );
}

export default App;
