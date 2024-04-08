import React from "react";
import "./addNew.css";
import { useFont } from "../fonts/fontContext";
function AddNew() {
  const fontStyles = useFont();
  return (
    <div>
      <button style={fontStyles} className="addNew">
        <img className="addNew-img" src="/assets/addNew.png"></img>AddNew
      </button>
    </div>
  );
}

export default AddNew;
