import React from 'react';
import { useFont } from '../fonts/fontContext';
function Clients() {
    const fontStyles = useFont();
    return ( 
        <div style={fontStyles}>
            <h1>Clients</h1>
        </div>
     );
}

export default Clients;