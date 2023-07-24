import "./box.css"
import * as React from "react"
import "./modal.css"
import Modal from "./modal.jsx"

function ElementDivs(props) {
    const [isOpen, setisOpen] = React.useState(null)

    function handleHover(index){
      document.getElementById(String(index)).style.transform="scale(1.1)"
      console.log(index)
    }

    function handleLeave(index){
      document.getElementById(String(index)).style.transition="transform 0.2s"
      document.getElementById(String(index)).style.transform="none"
      console.log(index)
    }
    function handleDivClick(index){
      if (index != isOpen){
        document.getElementById(String(index)).style.transition="transform 0s"
        document.getElementById(String(index)).style.transform="none"
        setisOpen(index)
      } else{
        setisOpen(null)
      }
    }

    return (
      <div class="container">
        {props.elements.map(function(element, index) {
          return <div key={index} id={String(index)} class="box">
          <img src={element["picture"]} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleLeave(index)} onClick = {() => handleDivClick(index)}></img>
          <h1 class="hyper" onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleLeave(index)} onClick = {() => handleDivClick(index)}>{element["name"]}</h1>
          <p class="hyper" onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleLeave(index)} onClick = {() => handleDivClick(index)}>{element["description"]}</p>
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