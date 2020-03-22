import React from "react";
import "./Button.scss";

function Button(props) {
    const buttonType = props.type;

    return (
      <div>
        <button className={`btn ${buttonType}`} onClick={props.click}>{props.text}</button>
      </div>
    );
  }

export default Button;
