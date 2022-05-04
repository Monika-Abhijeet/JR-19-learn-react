import { useContext } from "react";
import { AppContext } from "./useContextDemo";

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <label>Enter Username</label>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
}

export default Login;
