import "./box.css"
import React from "react"

function ElementDivs(props) {
    return (
      <div class="container">
        {props.elements.map(function(element, index) {
          return <div key={index} class="box">
          <img src={element["picture"]}></img>
          <h1>{element["name"]}</h1>
          <p>{element["description"]}</p>
          </div>
        })}
      </div>
    );
  }


function Box(elements = ["Empty"]) {
  return (
    <div>
      <h1>Elements:</h1>
      <ElementDivs elements={elements} />
    </div>
  );
}


export default Box