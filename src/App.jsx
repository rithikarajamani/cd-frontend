import React from "react";
import "./App.css";

import Table from "./components/table/table";
import { FontProvider } from "./components/fonts/fontContext";
import Header from "./components/header/header";
function App() {
  return (
    <>
      <FontProvider>
        <div className="App">
          <Header/>
          <Table />
        </div>
      </FontProvider>
      {/* <div style={{ fontFamily: 'Poppins' }}>
        
        </div> */}
    </>
  );
}

export default App;
