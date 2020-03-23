import React from "react";
import "./Container.scss";

export default function Container(props){
    return (
      <div className="container">
        <div className="content">
          {props.children}
        </div>        
      </div>
    );
  }

