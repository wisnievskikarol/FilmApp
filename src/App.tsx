import React from "react";
import "./App.scss";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="expenses" element={<Expenses />} />*/}
        {/*<Route path="invoices" element={<Invoices />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
