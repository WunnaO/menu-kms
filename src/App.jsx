import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
