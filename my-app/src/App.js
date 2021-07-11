import React, { useState } from "react";
import Header from "./component/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

function App() {
  const [menuOpen, setIsMenuOpen] = useState(false);
  console.log(menuOpen)
  return (
    <BrowserRouter>
      <div className="App">
        <Header menuOpen={menuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
