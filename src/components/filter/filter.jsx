import React from 'react';
function Filter() {
    return ( 

        

<div id="filterPopup" class="popup">
  <div class="popup-content">
    <form id="filterForm">
      
      <input type="text" id="filterInput" placeholder="Filter by keyword"/>
      <select id="categoryFilter">
        <option value="">All Categories</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        
      </select>
      

      <div class="btn-group">
        <button type="button" id="applyFilterBtn">Apply</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  </div>
</div>


     );
}

export default Filter;