import axios from "axios";
import { useEffect, useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { AllMerchant } from "../../api";
import { FaUserSecret } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

const Merchant = () => {
  const user = useSelector((state) => state.user_sec.user);
  let [merchant, setMerchant] = useState([]);
  const [looding, setLooding] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const data = async () => {
      const merchantData = await AllMerchant(user.auth);
      setMerchant(merchantData.data.merchant);
      setLooding(false);
    };
    data();
  }, []);
  const handelApproved = (id) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}auth/approvedmerchant`,
        {
          id,
        },
        {
          headers: {
            Authorization: `Bearer user@${user?.auth}@${
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
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      });
  };
  const handelReject = (id) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}auth/deletemerchant`,
        {
          id,
        },
        {
          headers: {
            Authorization: `Bearer user@${user?.auth}@${
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
  const handelDetails = (data) => {
    const username = data.fullName.split(" ").join("-");
    navigate(`/customerdetails/:${username}?uid=${data._id}`);
  };
  if (looding) {
    return <Loading />;
  }
  return (
    <section className="p-6 w-5/6 lg:w-full productlist relative">
      {user.role !== "admin" && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50 flex justify-center items-center">
          <p className="text-3xl text-white"> Admin Access Only...</p>
        </div>
      )}
      <ToastContainer />
      <table
        className={`w-full ${user.role !== "admin" && "pointer-events-none"}`}
      >
        <thead className="py-4 bg-secondary">
          <tr>
            <th className="border-r text-white hidden lg:block">Profile</th>
            <th className="border-r text-white">Name</th>
            <th className="border-r text-white">Email</th>
            <th className="border-r text-white hidden lg:block">Role</th>
            <th className="border-r text-white">Details</th>
            <th className="border-r text-white">Approved/Reject</th>
          </tr>
        </thead>
        <tbody>
          {merchant.map((item, i) => (
            <tr key={item._id}>
              <td className="hidden lg:block">
                {item?.merchant.avatar ? (
                  <img
                    src={item?.merchant.avatar}
                    alt="user"
                    className="w-12 h-12 m-auto rounded-full border"
                  />
                ) : (
                  <div className="w-12 h-12 text-3xl m-auto border rounded-full bg-secondary flex justify-center items-center text-white">
                    <FaUserSecret />
                  </div>
                )}
              </td>
              <td>
                #{++i} - {item?.merchant?.fullName}
              </td>
              <td>{item?.merchant?.email}</td>
              <td className="hidden lg:block">{item?.merchant?.role}</td>
              <td>
                <button
                  onClick={() => handelDetails(item.merchant)}
                  className="btn py-2 mx-5"
                >
                  Details
                </button>
              </td>
              <td className="flex items-center justify-evenly px-10">
                {item?.merchant?.role === "user" && (
                  <button
                    onClick={() => handelApproved(item._id)}
                    className="approved_btn"
                  >
                    <IoCheckmarkDoneSharp className="edit_icon" />
                  </button>
                )}
                <button
                  onClick={() => handelReject(item._id)}
                  className="reject_btn"
                >
                  <GiCrossMark className="blt_icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Merchant;
