import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";

function SignUp() {
  const signupSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("email is mandatory"),
  });

  const passwordSchema = Yup.object().shape({
    password: Yup.string()
      .required("password cant be empty")
      .test("len", "very week", (val) => val.length > 5)
      .test("len", " week", (val) => val.length > 8),
  });
  let onHandleSubmit = (values) => {
    console.log(values);
  };

  let onFormValidate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "email cant be empty";
    }

    return errors;
  };

  //   let validatePassword = (value) => {
  //     if (!value) {
  //       return "password ca<nt be empty";
  //     } else if (value.length < 5) {
  //       return "password very week";
  //     } else if (value.length < 8) {
  //       return "password week";
  //     }
  //     return undefined;
  //   };

  let validatePassword = (value) => {
    let error = undefined;
    try {
      passwordSchema.validateSync({ password: value });
    } catch (validationError) {
      error = validationError.errors[0];
    }
    return error;
  };
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={onHandleSubmit}
        // validate={onFormValidate}
        validationSchema={signupSchema}
      >
        {(props) => (
          <Form>
            <div>
              <label>Email</label>
              <Field name="email" type="text" />
            </div>
            <ErrorMessage name="email">
              {(error) => <p>{error}</p>}
            </ErrorMessage>
            <div>
              <label>Password</label>
              <Field
                name="password"
                type="password"
                validate={validatePassword}
              />
            </div>
            <ErrorMessage name="password">
              {(error) => <p>{error}</p>}
            </ErrorMessage>
            <div>
              <label>Confirm password</label>
              <Field
                name="confirmPassword"
                type="password"
                validate={validatePassword}
              />
            </div>
            <ErrorMessage name="confirmPassword">
              {(error) => <p>{error}</p>}
            </ErrorMessage>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
