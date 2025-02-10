import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Sidebar } from "./components/sidebar";
import { AddBook } from "./components/addBooks";

import "./App.css";
import "./components/sidebar.css";

export default function App() {
  return (
    <Router>
      <div className="App" id="outer-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add-book" element={<AddBook />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
