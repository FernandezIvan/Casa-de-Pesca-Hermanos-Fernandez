import React from "react";

const Botones =(props)=>{
    return<button onClick={props.func} style={{color:props.colorText}}>{props.children}</button>
};

export default Botones;