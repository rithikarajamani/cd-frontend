import React from "react";
import "./App.css";
import Table from "./components/table/table";
import { FontProvider } from "./components/fonts/fontContext";
import Login from "./components/login/login";

function App() {
  return (
    <>
      <FontProvider>
        <div className="App">
          <Login></Login>
          {/* <Table /> */}
        </div>
      </FontProvider>
    </>
  );
}

export default App;
