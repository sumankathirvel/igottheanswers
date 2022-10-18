import React from "react";
import Feed from "./Feed.js";
import QHeader from "./QHeader";
import "./Quora.css";



function Quora() {
  return (
    <div className="quora">
      <QHeader />
      <div className="quora__content">
      
        <Feed />
        
      </div>
    </div>
  );
}

export default Quora;
