import { Link, useNavigate } from "react-router-dom";
import ThreeDanim from "../ThreeDanim";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";

const Registration = () => {
  const [loadingBtn, setLoadingBtn] = useState(false);
  let navigate = useNavigate();
  let [regData, setRegData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressOne: "",
    password: "",
  });

  const handelReg = (e) => {
    setLoadingBtn(true);
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/registration`, regData,
      {
        headers: {
          Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
            import.meta.env.VITE_SWTSECRT
          }`,
        },
      })
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
        setLoadingBtn(false);
      })
      .finally(() => {
        setRegData({
          fullName: "",
          email: "",
          phone: "",
          addressOne: "",
          password: "",
        });
      });
  };
  return (
    <section className="h-screen bg-slate-100 bg-[url('../../bg.png')] bg-no-repeat bg-center bg-cover">
      <Link
        to="/about-site"
        className="text-lg font-normal text-white inline-block btn absolute top-5 right-10 z-50"
      >
        About this site
      </Link>
      <ToastContainer />
      <div className="container h-full relative flex items-center">
        <ThreeDanim />
        <form className="productBox w-full md:w-2/3 lg:w-1/2 xl:w-2/5 flex flex-col m-auto">
          <h2 className="title mb-2 lg:mb-12">Create Account</h2>
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

          {loadingBtn ? (
            <button className="btn w-1/2 m-auto mt-4">
              <span className="block mb-5">
                <PropagateLoader color="#fff" size={20} />
              </span>
            </button>
          ) : (
            <button onClick={handelReg} className="btn w-1/2 m-auto mt-4">
              Register
            </button>
          )}
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/becomemerchant" className="text-brand">
              Request to become Merchant
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Registration;
