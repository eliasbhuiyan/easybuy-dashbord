import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const OtpPage = () => {
  let navigate = useNavigate();
  const { userId } = useParams();
  const [inputs, setInputs] = useState(["", "", "", ""]);
  console.log(inputs.join(""));
  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    if (value && index < inputs.length - 1) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };
  const handelSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/otpmatch`, {
        otp: inputs.join(""),
        userId: userId.slice(1),
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
    <section className="h-screen w-full flex justify-center items-center">
      <ToastContainer />
      <div className="otpform flex flex-col items-center py-6">
        <h2 className="title capitalize">
          <span className="block">OTP</span> Verification Code
        </h2>
        <p className="basic text-center">
          We have sent a verification code to your email
        </p>
        {/* <div className="box mt-3">
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
      </div> */}
        <div className="flex">
          {inputs.map((inputValue, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="text"
              maxLength="1"
              value={inputValue}
              onChange={(e) => handleChange(index, e.target.value)}
              className="otp_input"
            />
          ))}
        </div>
        <button
          onClick={handelSubmit}
          className="shadow-[1px_1px_3px_#b5b5b5,-1px_-1px_3px_#ffffff] w-5/6 py-3 rounded-xl basic mt-auto"
        >
          Submit
        </button>
        <Link
          to="/registration"
          className="shadow-[1px_1px_3px_#b5b5b5,-1px_-1px_3px_#ffffff] w-5/6 py-3 rounded-xl basic text-center mt-5"
        >
          Back
        </Link>
      </div>
    </section>
  );
};

export default OtpPage;
