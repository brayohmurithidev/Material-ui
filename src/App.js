import React from "react";
import "./App.css";
import Create from './pages/Create';
import Notes from './pages/Notes'
import {Route, Routes, Link} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Notfound from "./pages/Notfound";



function App() {
  return (
  <div className="App">
    <Navbar />
      <Routes >
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
  </div>
  );
}

export default App;
