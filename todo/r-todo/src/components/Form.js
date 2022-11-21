import React from "react"



function Form(props) {
    return (
      <>
      <form onSubmit={props.handleSubmit}>
        <input type="text" placeholder="Add todo" value={props.todo}onChange={props.handleChange}/>
      </form>
      </>
    );
  }
  export default Form;