import "./box.css"
import * as React from "react"
import "./modal.css"
import Modal from "./modal.jsx"

function ElementDivs(props) {
    const [isOpen, setisOpen] = React.useState(null)

    function handleDivClick(index){
      if (index != isOpen){
        setisOpen(index)
        console.log(isOpen)
      } else{
        setisOpen(null)
        console.log(isOpen)
      }
    }

    return (
      <div class="container">
        {props.elements.map(function(element, index) {
          return <div key={index} class="box">
          <img src={element["picture"]} onClick = {() => handleDivClick(index)}></img>
          <h1 class="hyper" onClick = {() => handleDivClick(index)}>{element["name"]}</h1>
          <p class="hyper" onClick = {() => handleDivClick(index)}>{element["description"]}</p>
          {isOpen === index && <Modal name={element["name"]}setisOpen={setisOpen} num={index} links={element["links"]}/>}
          </div>
  
        })}
        
      </div>
    );
  }


function Box(elements = ["Empty"]) {
  return (
    <div>
      <h1 class="sub">Subjects</h1>
      <ElementDivs elements={elements} />
    </div>
  );
}


export default Box