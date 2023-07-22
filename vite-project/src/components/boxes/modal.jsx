import React from "react";
import "./modal.css"

const Modal = (props) => {
  function hide(){
    props.setisOpen(null)
  }
  return <div class="modal" id="modal">
    <div class="modal-content">
    <div class="modal-head">
    <span class="title">{props.name}</span>
    <span class="close" onClick={() => hide()}>&times;</span>
    </div>
    <div class="modal-body">
    {props.links.map(function(link, index){
        return <p key={index}>{link}</p>
    
      })}
    </div>
    </div>
  </div>;
};

export default Modal;
