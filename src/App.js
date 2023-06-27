import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Field required";
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Username should be an email";
      }

      if (!values.password) {
        errors.password = "Field required";
      }

      return errors;
    },
    onSubmit: (values) => {
      // Handle form submission here
      // Access form field values through `values` object
      alert("Login Successful");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email:</label>
          <input
            type="email"
            id="emailField"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <div id="emailError">{formik.errors.email}</div>
          )}
        </div>
        <br></br>
        <div>
          <label htmlFor="pswField">Password:</label>
          <input
            type="password"
            id="pswField"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && (
            <div id="pswError">{formik.errors.password}</div>
          )}
        </div>
        <br></br>
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
