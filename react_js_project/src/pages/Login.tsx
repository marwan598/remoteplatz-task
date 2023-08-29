import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../global/components/Input";
import Button from "../global/components/Button";
import { useEffect } from "react";
import { userLogin } from "../api/login";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  user: Yup.string().required("Username is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
});

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    if (token) {
      navigate("/Home", { replace: true });
    }
  }, [navigate]);

  const handleLogin = (user: string, password: string) => {
    userLogin({ user, pwd: password })
      .then((result: string | AxiosResponse) => {
        if (typeof result !== "string" && result.status === 200) {
          localStorage.setItem("AccessToken", result.data.accessToken);
          navigate("/Home", { replace: true });
        } else {
          console.log(result);
          alert("Please check Username or password ");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="w-full   ">
      <div className=" flex flex-row justify-center items-center mb-10  ">
        <div className="flex flex-col justify-center items-center">
          <div className=" flex flex-row justify-center items-center text-5xl font-bold text-center">
            <p className=" text-mYellow ">L</p>
            <p className=" text-white ">ogin</p>
          </div>
        </div>
      </div>
      <Formik
        validationSchema={schema}
        initialValues={{ user: "", password: "" }}
        onSubmit={(values) => {
          handleLogin(values.user, values.password);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className=" bg-neutral-700  rounded-xl h-96 w-96 flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <Input
              name="user"
              type="text"
              placeholder="Username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.user}
              id="user"
            />
            <p className="text-red-500 text-xs italic">
              {errors.user && touched.user && errors.user}
            </p>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <p className="text-red-500 text-xs italic">
              {errors.password && touched.password && errors.password}
            </p>
            <div className="flex items-center justify-between">
              <Button title="Login" type="submit" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
