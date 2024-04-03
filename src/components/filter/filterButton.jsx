import React from 'react';
import { useFont } from '../fonts/fontContext';
function FilterButton() {
    const fontStyles = useFont();
    return ( 

        <div style={fontStyles}>
            <button id="filterBtn" >Filter</button>
        </div>
     );
}

export default FilterButton;