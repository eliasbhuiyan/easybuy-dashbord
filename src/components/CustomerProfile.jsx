import {
  FaMountainCity,
  FaRegFileZipper,
  FaMapLocation,
} from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { GiCrossMark } from "react-icons/gi";
import PropTypes from "prop-types";
import { RiLockPasswordFill } from "react-icons/ri";

const CustomerProfile = ({ user }) => {
  let userData = user;
  const [enableEdit, setEnableEdit] = useState(false);
  const [userUpdateData, setUserUpdateData] = useState({
    fullName: userData.fullName,
    phone: userData.phone,
    addressOne: userData.addressOne,
    addressTwo: userData.addressTwo,
    zipCode: userData.zipCode,
    city: userData.city,
    country: userData.country,
    password: "",
    state: userData.state,
    uid: "",
  });
  const name = userData?.fullName;
  const firstName = name.substring(0, 1);
  const lastName = name.substring(name.indexOf(" ") + 1, name.indexOf(" ") + 2);
  const concatenated = firstName + lastName;

  const handleClick = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}auth/updateuser`,
        {
          fullName: userUpdateData.fullName,
          phone: userUpdateData.phone,
          addressOne: userUpdateData.addressOne,
          addressTwo: userUpdateData.addressTwo,
          zipCode: userUpdateData.zipCode,
          city: userUpdateData.city,
          country: userUpdateData.country,
          state: userUpdateData.state,
          password: userUpdateData.password,
          uid: user._id,
        },
        {
          headers: {
            Authorization: `Bearer user@${user._id}@${
              import.meta.env.VITE_SWTSECRT
            }`,
            "Content-Type": "multipart/form-data",
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
          window.location.reload();
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
    <div className="w-full lg:w-1/2 h-fit productBox">
      <ToastContainer />
      <div className="flex justify-between">
        <h2 className="text-lg text-secondary font-medium">Profile</h2>
        {enableEdit ? (
          <div className="flex gap-4 items-center">
            <GiCrossMark
              onClick={() => setEnableEdit(false)}
              className="cursor-pointer text-red-600 text-2xl"
            />
            <button onClick={handleClick} className="btn py-1 px-3 text-sm">
              Save
            </button>
          </div>
        ) : (
          <FaEdit
            onClick={() => setEnableEdit(true)}
            className="text-xl cursor-pointer"
          />
        )}
      </div>
      <div className="flex flex-col items-center">
        {userData?.avatar ? (
          <img
            src={userData?.avatar}
            alt="user"
            className="w-24 h-24 rounded-full border"
          />
        ) : (
          <div className="w-24 h-24 border rounded-full bg-secondary flex justify-center items-center text-white text-2xl">
            {concatenated}
          </div>
        )}
        <p className=" text-[#5b5f60] text-base font-semibold uppercase mt-3">
          ROLE: {userData.role}
        </p>
        <input
          placeholder="Full Name"
          value={userData.fullName}
          className={`userInput text-center ${
            enableEdit ? "outline-double" : "outline-none"
          }`}
          onChange={(e) =>
            setUserUpdateData({ ...userUpdateData, fullName: e.target.value })
          }
        />
      </div>
      <div className="p-0 xl:py-4 xl:px-6">
        <div className="flex items-center mt-4 text-gray-700">
          <MdEmail />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">Email:</span>
            <span className={`userInput`}>{userData.email}</span>
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaPhoneAlt />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">Phone:</span>
            <input
              placeholder="Enter your email address..."
              value={enableEdit ? userUpdateData.phone : userData.phone}
              className={`userInput ${
                enableEdit ? "outline-double" : "outline-none"
              }`}
              onChange={(e) =>
                setUserUpdateData({ ...userUpdateData, phone: e.target.value })
              }
            />
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaLocationDot />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              Address 1 :
            </span>
            <input
              placeholder="Enter your address..."
              value={
                enableEdit ? userUpdateData.addressOne : userData.addressOne
              }
              className={`userInput ${
                enableEdit ? "outline-double" : "outline-none"
              }`}
              onChange={(e) =>
                setUserUpdateData({
                  ...userUpdateData,
                  addressOne: e.target.value,
                })
              }
            />
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaLocationDot />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              Address 2 :
            </span>
            <input
              placeholder="Enter your address..."
              value={
                enableEdit
                  ? userUpdateData.addressTwo
                  : userData.addressTwo
                  ? userData.addressTwo
                  : "N/A"
              }
              className={`userInput ${
                enableEdit ? "outline-double" : "outline-none"
              }`}
              onChange={(e) =>
                setUserUpdateData({
                  ...userUpdateData,
                  addressTwo: e.target.value,
                })
              }
            />
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaMountainCity />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">City :</span>
            <input
              placeholder="Enter your address..."
              value={
                enableEdit
                  ? userUpdateData.city
                  : userData.city
                  ? userData.city
                  : "N/A"
              }
              className={`userInput ${
                enableEdit ? "outline-double" : "outline-none"
              }`}
              onChange={(e) =>
                setUserUpdateData({
                  ...userUpdateData,
                  city: e.target.value,
                })
              }
            />
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaRegFileZipper />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              Post Code :
            </span>
            <input
              placeholder="Enter your post code..."
              value={
                enableEdit
                  ? userUpdateData.zipCode
                  : userData.zipCode
                  ? userData.zipCode
                  : "N/A"
              }
              className={`userInput ${
                enableEdit ? "outline-double" : "outline-none"
              }`}
              onChange={(e) =>
                setUserUpdateData({
                  ...userUpdateData,
                  zipCode: e.target.value,
                })
              }
            />
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaRoad />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              State :
            </span>
            <input
              placeholder="Enter your state..."
              value={
                enableEdit
                  ? userUpdateData.state
                  : userData.state
                  ? userData.state
                  : "N/A"
              }
              className={`userInput ${
                enableEdit ? "outline-double" : "outline-none"
              }`}
              onChange={(e) =>
                setUserUpdateData({
                  ...userUpdateData,
                  state: e.target.value,
                })
              }
            />
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaMapLocation />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              Country :
            </span>
            <input
              placeholder="Enter your country..."
              value={
                enableEdit
                  ? userUpdateData.country
                  : userData.country
                  ? userData.country
                  : "N/A"
              }
              className={`userInput ${
                enableEdit ? "outline-double" : "outline-none"
              }`}
              onChange={(e) =>
                setUserUpdateData({
                  ...userUpdateData,
                  country: e.target.value,
                })
              }
            />
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaBox />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              Total Order :
            </span>
            <span className="text-base text-secondary font-medium">
              {userData.totalOrder}
            </span>
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <IoTimeSharp />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              Since :
            </span>
            <span className="text-base text-secondary font-medium">
              {userData.create.slice(0, 10)}
            </span>
          </h3>
        </div>
        {enableEdit && (
          <div className="flex justify-center">
            <div className="flex items-center mt-8 w-fit px-4 py-3 border shadow">
              <RiLockPasswordFill />
              <h3 className="px-2 w-full flex gap-2 items-center">
                <span className="text-lg text-secondary font-semibold">
                  Password :
                </span>
                <input
                  placeholder="Enter your password"
                  type="password"
                  className="userInput outline-double"
                  onChange={(e) =>
                    setUserUpdateData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
CustomerProfile.propTypes = {
  user: PropTypes.object.isRequired,
};
export default CustomerProfile;
