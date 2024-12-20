import { Link, useNavigate } from "react-router-dom";
import ThreeDanim from "../ThreeDanim";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { loggedUser } from "../../reducer/userSlice";
import { FaUserSecret } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [loadingBtnGst, setLoadingBtnGst] = useState(false);
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handelLogin = () => {
    setLoadingBtn(true);
    try {
      axios
        .post(`${import.meta.env.VITE_API_URL}auth/login`, {
          email: loginData.email,
          password: loginData.password,
        },
        {
          headers: {
            Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
              import.meta.env.VITE_SWTSECRT
            }`,
          },
        })
        .then((res) => {
          let currentTime = new Date().getTime();
          let expirationTime = new Date(currentTime + 10 * 24 * 60 * 60 * 1000);
          let expires = expirationTime.toUTCString();
          document.cookie = `sec_token=${res.data.sec_token}; expires=${expires};`;
          dispatch(loggedUser(res.data.userObject));
          if (
            res.data?.userObject?.role == "admin" ||
            res.data?.userObject?.role == "merchant"
          ) {
            toast.success(res?.data.message, {
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
            setLoadingBtn(false);
          }
        })
        .catch((err) => {
          toast.error(err.response?.data.error, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setLoadingBtn(false);
        });
    } catch (error) {
      console.log("Faild to login!");
    }
  };
  const handelGuest = () => {
    setLoadingBtnGst(true);
    try {
      axios
        .post(`${import.meta.env.VITE_API_URL}auth/login`, {
          email: "guestuser@gmail.com",
          password: "12345",
        },
        {
          headers: {
            Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
              import.meta.env.VITE_SWTSECRT
            }`,
          },
        })
        .then((res) => {
          let currentTime = new Date().getTime();
          let expirationTime = new Date(currentTime + 10 * 24 * 60 * 60 * 1000);
          let expires = expirationTime.toUTCString();
          document.cookie = `sec_token=${res.data.sec_token}; expires=${expires};`;
          dispatch(loggedUser(res.data.userObject));
          if (
            res.data?.userObject?.role == "admin" ||
            res.data?.userObject?.role == "merchant"
          ) {
            toast.success(res?.data.message, {
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
            setLoadingBtnGst(false);
          }
        })
        .catch((err) => {
          toast.error(err.response?.data.error, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setLoadingBtnGst(false);
        });
    } catch (error) {
      console.log("Faild to login!");
      setLoadingBtnGst(false);
    }
  };

  return (
    <section className="h-screen bg-slate-100 bg-[url('../../bg.png')] bg-no-repeat bg-center bg-cover relative">
      <Link
        to="/about-site"
        className="btn absolute top-5 right-10 z-50"
      >
        About this site
      </Link>
      <ToastContainer />
      <div className="container h-full relative flex items-center gap-9">
        <ThreeDanim />
        <div className="productBox w-full md:w-2/3 lg:w-1/2 xl:w-2/5 flex flex-col m-auto">
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
          {loadingBtn ? (
            <button className="btn w-1/2 m-auto mt-4">
              <span className="block mb-5">
                <PropagateLoader color="#fff" size={20} />
              </span>
            </button>
          ) : (
            <button onClick={handelLogin} className="btn w-1/2 m-auto mt-4">
              Sign In
            </button>
          )}
          {loadingBtnGst ? (
            <button className="btn w-1/2 m-auto mt-4">
              <span className="block mb-5">
                <PropagateLoader color="#fff" size={20} />
              </span>
            </button>
          ) : (
            <button
              onClick={handelGuest}
              className="btn flex gap-3 items-center justify-center w-1/2 m-auto mt-4"
            >
              <FaUserSecret className="text-lg" />
              Continue As Guest
            </button>
          )}

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
