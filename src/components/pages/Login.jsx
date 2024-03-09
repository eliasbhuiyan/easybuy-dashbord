import { Link, useNavigate } from "react-router-dom";
import ThreeDanim from "../ThreeDanim";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handelLogin = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}auth/login`,
        {
          email: loginData.email,
          password: loginData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        document.cookie = `sec_token=${res.data.sec_token}; path=/;`;
        if (res.data.role == "admin" || res.data.role == "merchant") {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          toast.error("You are not authorized", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      });
  };
  return (
    <section className="h-screen bg-slate-100 bg-[url('../../bg.png')] bg-no-repeat bg-center bg-cover">
      <ToastContainer />
      <div className="container h-full relative flex items-center">
        <ThreeDanim />
        <div className="productBox w-2/5 flex flex-col">
          <h2 className="title">Sign In To Your Account</h2>
          <label className="primary">
            <input
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              type="email"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Email Address *</span>
          </label>

          <label className="primary">
            <input
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              type="password"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Password *</span>
          </label>
          <Link to="/forgotpassword" className="text-brand ml-8">
            Forgot Password?
          </Link>
          <button onClick={handelLogin} className="btn w-1/2 m-auto mt-4">
            Sign In
          </button>
          <p className="mt-4 text-center">
            Don&apos;t have an account?{" "}
            <Link to="/registration" className="text-brand">
              Sign up here.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
