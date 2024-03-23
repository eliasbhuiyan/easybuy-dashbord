import { ToastContainer, toast } from "react-toastify";
import ThreeDanim from "../ThreeDanim";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BecomeMerchant = () => {
  let [merchantData, setMerchantData] = useState({
    email: "",
    password: "",
  });
  const handelMerchant = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/merchant`, {
        email: merchantData.email,
        password: merchantData.password,
      })
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
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
        setMerchantData({
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
        <form className="productBox w-full md:w-2/3 lg:w-1/2 xl:w-2/5 flex flex-col m-auto">
          <h2 className="title">Become Merchant</h2>
          <label className="primary">
            <input
              value={merchantData.email}
              onChange={(e) =>
                setMerchantData({ ...merchantData, email: e.target.value })
              }
              type="email"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Email Address *</span>
          </label>

          <label className="primary">
            <input
              value={merchantData.password}
              onChange={(e) =>
                setMerchantData({ ...merchantData, password: e.target.value })
              }
              type="password"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Password *</span>
          </label>
          <button onClick={handelMerchant} className="btn w-1/2 m-auto mt-4">
            Become Merchant
          </button>
          <p className="mt-4 text-center">
            Already Merchant ?{" "}
            <Link to="/login" className="text-brand">
              Sign In here.
            </Link>
          </p>
          <p className="mt-4 text-center">
            Don&apos;t have an account ?{" "}
            <Link to="/registration" className="text-brand">
              Sign Up here.
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default BecomeMerchant;
