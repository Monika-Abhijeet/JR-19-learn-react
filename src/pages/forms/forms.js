import { QrCodeScannerOutlined } from "@mui/icons-material";
import { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    isChecked: false,
    emailError: "",
    passwordError: "",
  });

  let handleEmailInputChange = (event) => {
    setInputs({
      ...inputs,
      email: event.target.value,
      emailError: "",
      passwordError: "",
    });
  };
  let handlePasswordInputChange = (event) => {
    setInputs({
      ...inputs,
      password: event.target.value,
      emailError: "",
      passwordError: "",
    });
  };
  let handleRememberChange = (event) => {
    setInputs({ ...inputs, isChecked: event.target.checked });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, emailError: "", passwordError: "" });
    if (!inputs.email) {
      setInputs({
        ...inputs,
        emailError: "should not be empty",
      });
      console.log(inputs);
    }
    if (!inputs.password) {
      setInputs({ ...inputs, passwordError: "password cant be empty" });
    } else if (inputs.password.length < 8) {
      setInputs({
        ...inputs,
        passwordError: "password length should be greater than 8",
      });
    }
    if (inputs.emailError || inputs.passwordError) {
      console.log("errrr");
    } else {
      e.preventDefault();
      console.log(inputs);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email" className="form-control-label">
          Email
        </label>
        <input
          type="text"
          value={inputs.email}
          onChange={(e) => handleEmailInputChange(e)}
        />
        {inputs.emailError && <p>{inputs.emailError}</p>}
        <label htmlFor="email" className="form-control-label">
          Password
        </label>
        <input
          type="text"
          value={inputs.password}
          onChange={(e) => handlePasswordInputChange(e)}
        />
        {inputs.passwordError && <p>{inputs.passwordError}</p>}

        <label>remember me</label>
        <input
          type="checkbox"
          check={inputs.checked}
          onChange={(e) => handleRememberChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
