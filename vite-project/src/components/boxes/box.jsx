import "./box.css"
import React from "react"

function ElementDivs(props) {
    return (
      <div>
        {props.elements.map(function(element, index) {
          return <div key={index}>{element}</div>;
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