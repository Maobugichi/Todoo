import React from "react";
import pencil from "../assets/pencil-solid.svg"
import check from "../assets/check-solid.svg"

function ListItem(props) {
  return(
    <ul>
          <li onClick={
        () => {
          props.delete(props.id)
        }
      }>{props.content} </li> <img className="btn" onClick={() => {
        props.edit(props.id)
      }} width="30px" src={ pencil} alt="pencil"/>
    </ul>
  )
  
}

export default ListItem