import { useContext } from "react";
import { AppContext } from "./useContextDemo";

function Hello() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
  );
}
export default Hello;
