import React,{useState} from "react";

function InputArea(props) {

  //console.log(props)

  const [object,updateObject] = useState("")
  

  function eventChange(event) {
    const {name,value} = event.target;
    updateObject(value)
  }

  return(
    <form >
      <input size="1000" onChange={eventChange} type="text" name="todo"placeholder="toDo?" value={object}/>
      <button onClick={(event) => {
        props.isClick(object,event)
      }} type="submit">Add</button>
    </form>
  )
}

export default InputArea