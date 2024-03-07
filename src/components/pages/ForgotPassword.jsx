import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const ForgotPassword = () => {
  let [email, setEmail] = useState("");
  const handelSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/forgotpassword`, {
        email,
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
      });
  };
  return (
    <section>
      <ToastContainer />
      <div className="productBox w-fit m-auto flex flex-col">
        <h2 className="primary uppercase text-center pb-2">Forgot Password?</h2>
        <hr />
        <p className="primary text-lg font-semibold py-2">
          Please enter your email address to reset your password
        </p>
        <div className="flex flex-col">
          <label className="primary">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Email Address *</span>
          </label>
          <button onClick={handelSubmit} className="btn w-fit m-auto mt-4">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
