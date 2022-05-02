import Login from "./login";
import User from "./user";
import { createContext } from "react";
export const AppContext = createContext(null);
function UseContextTutorial() {
  return (
    <div>
      <h1>Use context tutorial</h1>
      <User />
      <Login />
    </div>
  );
}
export default UseContextTutorial;
