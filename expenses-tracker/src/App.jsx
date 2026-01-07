import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Transaction from "./components/Transactions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#F5EFE6]">
        <Navbar />
        <div className="py-16">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/transaction" element={<Transaction />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
