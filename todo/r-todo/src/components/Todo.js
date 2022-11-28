import React from "react"


function Todo(props){
    
    const{item,index, data, setData}=props;


    const handleDelete=(index)=>{
        data.splice(index,1)
        setData([...data])
      }

      function setTrue(e) {
        var id = e.target.dataset.id;
        data[id].status = !data[id].status;
        setData([...data])
    }
    
return(
<>
<div className="flex">
    <div className="inline mt-top">
        <input className='checkedItem' type ='checkbox' data-id={index} onClick={setTrue} />
        <span className='todo-item' data-id={index}>{item.item}</span>
    </div>
<button onClick={()=>handleDelete(index)}>delete</button>
</div>
</>
)
    
}

export default Todo