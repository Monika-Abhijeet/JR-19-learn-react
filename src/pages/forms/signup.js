import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Signup() {
  const signupSchema = Yup.object().shape({
    firstname: Yup.string("First name should be a string").required(
      "firstname is required"
    ),
    age: Yup.number("age should be a number").required(),
    email: Yup.string().email("invalid email").required("email cant be empty"),
    password: Yup.string()
      .required("Password cant be empty")
      .min(8, "password week")
      .max(16, "password too long"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "password should match"
    ),
  });

  let handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{
          firstname: "",
          age: 0,
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={signupSchema}
      >
        {(props) => (
          <Form>
            <div>
              <label>First Name</label>
              <Field type="text" name="firstname" />
              <ErrorMessage name="firstname">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div>
              <label>Age</label>
              <Field type="text" name="age" />
              <ErrorMessage name="age">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div>
              <label>Password</label>
              <Field type="text" name="password" />
              <ErrorMessage name="password">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div>
              <label>Confirm Password</label>
              <Field type="text" name="confirmPassword" />
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
