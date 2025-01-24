import React from "react";
import Login from "./components/login";
import Dashboard from "./components/Dashboard.1";
import Settings from "./components/settings";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import History from "./components/history";
import Home from "./components/home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Dashboard/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/history" element={<History/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
