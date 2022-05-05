import Hello from "./components/hello";
import HeaderComponent from "./components/header";
import ClassDemo from "./components/class-demo";
import FunctionDemo from "./components/function-demo";
import MaterialUI from "./components/material-ui";
import React from "react";
import { Class } from "@mui/icons-material";
import HomeComponent from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/registration/registration";
import Home from "./components/pages/Home";
import About from "./components/pages/about";
import Login from "./components/pages/login";
import Navbar from "./components/navbar/navbar";
import StudentDetails from "./pages/studentDetails/studentDetails";
import Form from "./pages/forms/forms";
import SignUp from "./pages/forms/signup";
import Signin from "./pages/forms/signin";
import UseContextTutorial from "./pages/hooks/useContext";
import HttpRequest from "./components/httpRequests/httpRequest";
import AxiosRequests from "./components/httpRequests/axiosRequests";
import UseStateDemo from "./components/hooks/useStateDemo";
import UseReducerDemo from "./components/hooks/useReducerDemo";
import UseEffectDemo from "./components/hooks/useEffectDemo";
import UseRefDemo from "./components/hooks/useRefDemo";
import UseContextDemo from "./components/hooks/useContext/useContextDemo";
import ParentLifeCycle from "./components/lifecycle/ParentLifecycle";
import ParentComp from "./components/pureComponentDemo/parentComp";
import Inline from "./components/styling/inline";
import ParentStyling from "./components/styling/parentStyle";
import ParentErrorBoundary from "./components/errorBoundary/parentErrorBoundary";
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
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/http" element={<HttpRequest />} />
            <Route path="/axios" element={<AxiosRequests />} />
            <Route path="/useState" element={<UseStateDemo />} />
            <Route path="/useReducer" element={<UseReducerDemo />} />
            <Route path="/useEffect" element={<UseEffectDemo />} />
            <Route path="/useRef" element={<UseRefDemo />} />
            <Route path="/useContext" element={<UseContextDemo />} />
            <Route path="/useContext" element={<UseContextTutorial />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/details/:id" element={<StudentDetails />} />
            <Route path="lifecycle" element={<ParentLifeCycle />} />
            <Route path="/pureComp" element={<ParentComp />} />
            <Route path="/styles" element={<ParentStyling />} />
            <Route path="/errorBoundary" element={<ParentErrorBoundary />} />
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
