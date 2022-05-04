import Login from "./login";
import User from "./user";
import Hello from "./hello";
import { useState, createContext } from "react";

export const AppContext = createContext(null);

function UseContextDemo() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h1>Context Demo</h1>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
        <Hello />
      </AppContext.Provider>
    </div>
  );
}

export default UseContextDemo;
