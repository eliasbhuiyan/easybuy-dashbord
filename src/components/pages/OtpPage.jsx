import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const OtpPage = () => {
  let navigate = useNavigate();
  const { userId } = useParams();
  const [inputs, setInputs] = useState(["", "", "", ""]);
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
  const handelResendOtp = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}auth/resendotp`,
        {
          userId: userId.slice(1),
        },
        {
          headers: {
            Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
              import.meta.env.VITE_SWTSECRT
            }`,
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
        toast.info(res.data.info, {
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
    <section className="h-screen w-full flex justify-center items-center">
      <ToastContainer />
      <div className="otpform flex flex-col items-center py-6">
        <h2 className="title capitalize">
          <span className="block">OTP</span> Verification Code
        </h2>
        <p className="basic text-center">
          We have sent a verification code to your email
        </p>
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
        <div className="flex gap-3 mt-auto mb-2 font-dm font-normal text-secondary text-base">
          <p>Didn&apos;t receive the code?</p>
          <button
            onClick={handelResendOtp}
            className="underline text-slate-600"
          >
            Resend OTP
          </button>
        </div>
        <button
          onClick={handelSubmit}
          className="shadow-[1px_1px_3px_#b5b5b5,-1px_-1px_3px_#ffffff] w-5/6 py-3 rounded-xl basic mb-5"
        >
          Submit
        </button>
        <Link
          to="/signup"
          className="shadow-[1px_1px_3px_#b5b5b5,-1px_-1px_3px_#ffffff] w-5/6 py-3 rounded-xl basic text-center"
        >
          Back
        </Link>
      </div>
    </section>
  );
};

export default OtpPage;
