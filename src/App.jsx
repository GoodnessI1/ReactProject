import React from "react";
import Loginpage from "./pages/Loginpage";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { DataProvider } from "./context/DataContext";

function App() {
  return (
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
  );
}

export default App;
