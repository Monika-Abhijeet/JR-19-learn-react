import Hello from "./components/hello";
import HeaderComponent from "./components/header";
import ClassDemo from "./components/class-demo";
import FunctionDemo from "./components/function-demo";
import MaterialUI from "./components/material-ui";
import React from "react";
import { Class } from "@mui/icons-material";
import HomeComponent from "./components/home";
import UseStateTutorial from "./components/hooks/useState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/registration/registration";
import Home from "./components/pages/Home";
import About from "./components/pages/about";
import Login from "./components/pages/login";
import Navbar from "./components/navbar/navbar";
import StudentDetails from "./pages/studentDetails/studentDetails";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <div style={{ marginTop: "8vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/details/:id" element={<StudentDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    //   <UseStateTutorial></UseStateTutorial>
    //   <FunctionDemo title="functional Component" greet={onGreet}></FunctionDemo>
    //   <MaterialUI></MaterialUI>
    //   <ClassDemo
    //     email="abc@gmail.com"
    //     title="title from the parent"
    //   ></ClassDemo>
    // </div>
  );
}

export default App;
