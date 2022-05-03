import React from "react";
import "./App.css";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      
      <Layout>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
