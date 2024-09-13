import { useState } from 'react'
import Nav from './Nav'
import InputArea from './InputArea'
import ListItem from './ListItem'
import check from "../assets/check-solid.svg"

function App() {
  const [list, setList] = useState([]);
  const [isInput, setIsInput] = useState(false);
  const [ide, updateIde] = useState();
  const [newValue, updateNewValue] = useState("");
  const [changeOccur, trackChange] = useState(false)

  function click(object,event) {
    event.preventDefault()
    setList((prevValue) => {
      return [...prevValue,object]
    })
  }

  function editClick(id) {
    updateIde(id)
    setIsInput(true)
    console.log("hello")
  }

  function isChange(event) {
    const {name,value} = event.target;
    updateNewValue(value)
    trackChange(true)
    console.log(newValue)
  }

  function update(event) {

    event.preventDefault()


    console.log(newValue.length)
    if (changeOccur && newValue.length >= 1) {
      setList((prevValue) => {
        return [...prevValue.slice(0,ide), newValue , ...prevValue.slice(ide + 1) ]
      })
    } else {
     setList((prevValue) => {
        return [...prevValue]
      })
    }

    setIsInput(false)
    
  }

  function isDelete(id) {
    setList((prevValue) => {
      return prevValue.filter((item,index) => {
        return index !== id
      })
    })
  }

  return (
    <>
    <Nav/>
      <div className="container">
      <h2>My Todo <span>🖊️</span></h2>
      <InputArea
      isClick={click}
      />
  
     { list.map((item,index) => {
        return(
         ide === index && isInput ? 
         <div>
            <input className='btn' name={`update${index}`} onChange={isChange} defaultValue={item}/> <img className='btn' onClick={update} width="30px" src={check} alt="" />
         </div>
         :
          <ListItem key={index} id={index} content={item} edit={editClick}
          input={isInput}
          delete={isDelete}
          />  
        )
      })}
      </div>
     
    </>
  )
}

export default App
