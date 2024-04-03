import React from 'react';

import Clients from '../clients/client';
import FilterButton from '../filter/filterButton';
import { useFont } from '../fonts/fontContext';
import Search from '../search/search';
function Header() {
    const fontStyles = useFont();
    return ( 
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Clients></Clients>
          <FilterButton></FilterButton>
          <Search></Search>
        </div>
     );
}

export default Header;