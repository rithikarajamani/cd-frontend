import React from "react";
import "./filterButton.css"
import { useFont } from "../fonts/fontContext";
function FilterButton() {
  const fontStyles = useFont();
  return (
    <div>
      <button style={fontStyles} className="filterBtn">
        <img src="/assets/filterIcon.png"></img>Filter
      </button>
    </div>
  );
}

export default FilterButton;
