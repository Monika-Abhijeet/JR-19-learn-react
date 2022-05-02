import { Formik, Form, Field, ErrorMessage } from "formik";

function Signin() {
  let handleSubmit = (values) => {
    console.log(values);
  };
  let handleValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = " Email cannot be empty";
    }
    if (!values.password) {
      errors.password = "Password cannot be empty";
    } else if (values.password.length < 8) {
      errors.password = "Password should have minimum 8 characters";
    }
    return errors;
  };
  return (
    <div>
      <h1>Sign In</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e) => handleValidation(e)}
      >
        {(props) => (
          <Form>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div>
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Signin;
