import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const OtpPage = () => {
  let navigate = useNavigate();
  const { userId } = useParams();
  let [otpData, setOtpData] = useState({
    otp: "",
    userId: "",
  });
  useEffect(() => {
    setOtpData((prevState) => ({
      ...prevState,
      userId: userId.slice(1),
    }));
  }, [userId]);
  const handleOtpChange = (index, value) => {
    const updatedOtpData = { ...otpData };
    updatedOtpData.otp = `${updatedOtpData.otp.slice(
      0,
      index
    )}${value}${updatedOtpData.otp.slice(index + 1)}`;
    setOtpData(updatedOtpData);
  };
  const handelSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/otpmatch`, {
        otp: otpData.otp,
        userId: otpData.userId,
      })
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
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
    <div className="otpform m-auto">
      <ToastContainer />
      <h2 className="title capitalize">
        <span className="block">OTP</span> Verification Code
      </h2>
      <p className="basic text-center">
        We have sent a verification code to your mobile number
      </p>
      <div className="box">
        <input
          value={otpData.otp[0] || ""}
          onChange={(e) => handleOtpChange(0, e.target.value)}
          className="otp_input"
          type="password"
          maxLength="1"
        />
        <input
          value={otpData.otp[1] || ""}
          onChange={(e) => handleOtpChange(1, e.target.value)}
          className="otp_input"
          type="password"
          maxLength="1"
        />
        <input
          value={otpData.otp[2] || ""}
          onChange={(e) => handleOtpChange(2, e.target.value)}
          className="otp_input"
          type="password"
          maxLength="1"
        />
        <input
          value={otpData.otp[3] || ""}
          onChange={(e) => handleOtpChange(3, e.target.value)}
          className="otp_input"
          type="password"
          maxLength="1"
        />
      </div>
      <button onClick={handelSubmit} className="btn1">
        Submit
      </button>
      <Link to="/registration" className="btn2">
        Back
      </Link>
    </div>
  );
};

export default OtpPage;
