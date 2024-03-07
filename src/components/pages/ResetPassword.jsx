import axios from "axios";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}auth/resetpassword`,
        {
          email: userData.email,
          password: userData.password,
        },
        {
          headers: {
            Authorization: `${searchParams.get("token")}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setTimeout(() => {
          navigate(`/login`);
        }, 3000);
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
        setUserData({
          email: "",
          password: "",
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
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              value={userData.email}
              type="email"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Email Address *</span>
          </label>
          <label className="primary">
            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              value={userData.password}
              type="password"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Password *</span>
          </label>
          <button onClick={handelSubmit} className="btn w-fit m-auto mt-4">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
