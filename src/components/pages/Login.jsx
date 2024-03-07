import { Link, useNavigate } from "react-router-dom";
import ThreeDanim from "../ThreeDanim";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loggeduser } from "../../reducer/userSlice";
const Login = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handelLogin = (e) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/login`, {
        email: loginData.email,
        password: loginData.password,
      })
      .then((res) => {
        if (res.data.user.role === "user") {
          toast.error("You are not authorized", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
        } else {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/");
          }, 1500);
          dispatch(loggeduser(res.data.user));
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      })
      .finally(() => {
        setLoginData({
          email: "",
          password: "",
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
