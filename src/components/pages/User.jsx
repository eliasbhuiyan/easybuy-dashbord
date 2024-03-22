import {
  FaMountainCity,
  FaRegFileZipper,
  FaMapLocation,
} from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { GiCrossMark } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../../reducer/userSlice";
import { FileUploader } from "react-drag-drop-files";

const CustomerProfile = () => {
  const user = useSelector((state) => state.user_sec.user);
  const dispatch = useDispatch();
  const [enableEdit, setEnableEdit] = useState(false);
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState(null);
  const [userUpdateData, setUserUpdateData] = useState({
    fullName: user.name,
    phone: user.phone,
    email: user.email,
    addressOne: user.address,
    addressTwo: user.addressTwo,
    zipCode: user.zipCode,
    city: user.city,
    country: user.country,
    state: user.state,
    uid: user.auth,
  });

  const handleClick = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/updateuser`, {
        fullName: userUpdateData.fullName,
        image,
        phone: userUpdateData.phone,
        email: userUpdateData.email,
        addressOne: userUpdateData.addressOne,
        addressTwo: userUpdateData.addressTwo,
        zipCode: userUpdateData.zipCode,
        city: userUpdateData.city,
        country: userUpdateData.country,
        state: userUpdateData.state,
        uid: user.auth,
      },
      {
        headers: {
          Authorization: `Bearer user@${user?.auth}@${
            import.meta.env.VITE_SWTSECRT
          }`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        let currentTime = new Date().getTime();
        let expirationTime = new Date(currentTime + 10 * 24 * 60 * 60 * 1000);
        let expires = expirationTime.toUTCString();
        document.cookie = `sec_token=${res.data.sec_token}; expires=${expires};`;
        dispatch(loggedUser(res.data.userObject));
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
      }).finally(()=>{
        setTimeout(() => {
          window.location.reload() 
        }, 1500);       
      })
  };
     // Image Upload Part
  const fileTypes = ["JPEG", "PNG", "JPG", "PDF"];
  const handleChange = async (files) => {
    setImage(files[0]);
    setImageUrl(URL.createObjectURL(files[0]));
  };
  return (
    <section className="w-full relative z-10 pt-10 flex justify-center items-center bg-slate-200">
     <h3 className="heading_bg pt-4 -z-10">Profile</h3>
      <div className="w-1/2 h-fit productBox bg-slate-100 m-auto">
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
        {
          enableEdit
          &&
          <label className="primary pb-4 inline-block">
            Upload Profile *
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </label>
        }
           
        {user?.avatar ? (
          <img
            src={enableEdit ? imageUrl : user?.avatar}
            alt="user"
            className="w-24 h-24 rounded-full border"
          />
        ) : (
          <div className="w-24 h-24 border rounded-full bg-secondary flex justify-center items-center text-white text-2xl">
            User
          </div>
        )}
        <p className=" text-[#5b5f60] text-base font-semibold uppercase mt-3">
          ROLE: <span className="text-brand">{user.role}</span>
        </p>
        <input
          placeholder="Full Name"
          value={enableEdit ? userUpdateData.fullName : user.name}
          className={`userInput text-center ${
            enableEdit ? "outline-double" : "outline-none"
          }`}
          onChange={(e) =>
            setUserUpdateData({ ...userUpdateData, fullName: e.target.value })
          }
        />
      </div>
      <div className="py-4 px-6">
        <div className="flex items-center mt-4 text-gray-700">
          <MdEmail />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">Email:</span>
            <input
              placeholder="Enter your email address..."
              value={enableEdit ? userUpdateData.email : user.email}
              className={`userInput ${
                enableEdit ? "outline-double" : "outline-none"
              }`}
              onChange={(e) =>
                setUserUpdateData({ ...userUpdateData, email: e.target.value })
              }
            />
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaPhoneAlt />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">Phone:</span>
            <input
              placeholder="Enter your email address..."
              value={enableEdit ? userUpdateData.phone : user.phone}
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
                enableEdit ? userUpdateData.addressOne : user.address
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
                  : user.addressTwo
                  ? user.addressTwo
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
                  : user.city
                  ? user.city
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
                  : user.zipCode
                  ? user.zipCode
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
                  : user.state
                  ? user.state
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
                  : user.country
                  ? user.country
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
      </div>
    </div>
    </section>
  );
};

export default CustomerProfile;
