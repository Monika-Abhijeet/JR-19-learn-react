import "./stylesheet.css";
import { useState } from "react";
function ExternalStyles() {
  const [success, setSuccess] = useState(true);
  return (
    <div>
      <h1 className="primary ">This is CSS styled element</h1>
      <h2 className={success ? "success" : "danger"}>
        this is success or failure
      </h2>
      <button onClick={() => setSuccess(true)}>Success</button>
      <button onClick={() => setSuccess(false)}>Failure</button>
    </div>
  );
}

export default ExternalStyles;
