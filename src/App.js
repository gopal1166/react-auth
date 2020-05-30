import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from './auth/Login';
import Dashboard from './dashboard/Dashboard';
import Routes from "./routes/Routes";


function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
