import React from "react";
import './Container.scss';

function Container(props){
    return (
      <div className="container">
        <div className="content">
          {props.children}
        </div>        
      </div>
    );
  }

export default Container;
