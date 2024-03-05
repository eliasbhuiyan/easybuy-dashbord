import { Link, useNavigate } from "react-router-dom";
import ThreeDanim from "../ThreeDanim";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  // const [isLogin, setIsLogin] = useState(false);
  let navigate = useNavigate();
  let [regData, setRegData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressOne: "",
    password: "",
  });

  const handelReg = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/registration`, regData)
      .then((res) => {
        toast.success(res.data.success, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setTimeout(() => {
          navigate(`/otp/:${res.data.userId}`);
        }, 3000);
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
    <section className="h-screen bg-slate-100">
      <ToastContainer />
      <div className="container h-full relative flex items-center">
        <ThreeDanim />
        <form className="productBox w-1/2 flex flex-col">
          <h2 className="title">Create Account</h2>
          <label className="primary">
            <input
              value={regData.fullName}
              onChange={(e) =>
                setRegData({ ...regData, fullName: e.target.value })
              }
              type="text"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Full Name *</span>
          </label>
          <label className="primary">
            <input
              value={regData.email}
              onChange={(e) =>
                setRegData({ ...regData, email: e.target.value })
              }
              type="email"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Email Address *</span>
          </label>
          <label className="primary">
            <input
              value={regData.phone}
              onChange={(e) =>
                setRegData({ ...regData, phone: e.target.value })
              }
              type="number"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Phone *</span>
          </label>
          <label className="primary">
            <input
              value={regData.addressOne}
              onChange={(e) =>
                setRegData({ ...regData, addressOne: e.target.value })
              }
              type="text"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Address *</span>
          </label>
          <label className="primary">
            <input
              value={regData.password}
              onChange={(e) =>
                setRegData({ ...regData, password: e.target.value })
              }
              type="password"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Password *</span>
          </label>
          <button onClick={handelReg} className="btn w-1/2 m-auto mt-4">
            Register
          </button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to='/becomemerchant' className="text-brand">
              Request to become Merchant
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Registration;