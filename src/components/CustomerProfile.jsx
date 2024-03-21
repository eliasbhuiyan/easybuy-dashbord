import {
  FaMountainCity,
  FaRegFileZipper,
  FaMapLocation,
} from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const CustomerProfile = ({ userData }) => {
  console.log(userData);
  return (
    <div className="w-1/2 h-fit productBox">
      <div className="flex justify-between">
        <h2 className="text-lg text-secondary font-medium">Profile</h2>
        <FaEdit className="text-xl cursor-pointer" />
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/EliasBhuiyan.jpg"
          alt="user"
          className="w-24 h-20 rounded-2xl border-2 border-white"
        />
        <p className=" text-[#5b5f60] text-base font-semibold uppercase">
          ROLE: {userData.role}
        </p>
        <h2 className="text-secondary text-lg font-semibold">
          {userData.fullName}
        </h2>
      </div>
      <div className="py-4 px-6">
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
          </svg>
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">Email:</span>
            <span className="text-base text-secondary font-medium">
              {userData.email}
            </span>
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaPhoneAlt />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">Phone:</span>
            <span className="text-base text-secondary font-medium">
              0{userData.phone ? userData.phone : "N/A"}
            </span>
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
            <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
          </svg>
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              Address 1 :
            </span>
            <span className="text-base text-secondary font-medium">
              {userData.addressOne}
            </span>
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
            <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
          </svg>
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              Address 2 :
            </span>
            <span className="text-base text-secondary font-medium">
              {userData.addressTwo ? userData.addressTwo : "N/A"}
            </span>
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaMountainCity />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">City :</span>
            <span className="text-base text-secondary font-medium">
              {userData.city ? userData.city : "N/A"}
            </span>
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaRegFileZipper />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              Post Code :
            </span>
            <span className="text-base text-secondary font-medium">
              {userData.zipCode ? userData.zipCode : "N/A"}
            </span>
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaRoad />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              State :
            </span>
            <span className="text-base text-secondary font-medium">
              {userData.state ? userData.state : "N/A"}
            </span>
          </h3>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaMapLocation />
          <h3 className="px-2 flex gap-2 items-center">
            <span className="text-lg text-secondary font-semibold">
              Country :
            </span>
            <span className="text-base text-secondary font-medium">
              {userData.country ? userData.country : "N/A"}
            </span>
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
      </div>
    </div>
  );
};

export default CustomerProfile;
