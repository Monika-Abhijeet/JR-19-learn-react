import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Signup() {
  const signupSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("email cant be empty"),
    password: Yup.string()
      .required("Password cant be empty")
      .test("len", "very week", (val) => val.length > 5)
      .test("len", "week", (val) => val.length > 8),
    confirmPassword: Yup.string()
      .required("Password cant be empty")
      .test("len", "very week", (val) => val.length > 5)
      .test("len", "week", (val) => val.length > 8),
  });

  let handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(e) => handleSubmit()}
        validationSchema={signupSchema}
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
            <div>
              <label>Confirm Password</label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword">
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

export default Signup;
