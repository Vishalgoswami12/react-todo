import React from "react"


function Todo(props){
    const{todoName,index,handleDelete}=props;
return(
<>
<h2>{todoName}</h2>
<button onClick={()=>handleDelete(index)}>delete</button>
</>
)
    
}

export default Todo