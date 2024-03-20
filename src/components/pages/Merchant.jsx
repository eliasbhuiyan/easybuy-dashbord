import axios from "axios";
import { useEffect, useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AllMerchant } from "../../api";

const Merchant = () => {
  const user = useSelector((state) => state.user_sec.user);
  let [merchant, setMerchant] = useState([]);
  useEffect(() => {
    const data = async () => {
      const merchantData = await AllMerchant(user.auth);
      setMerchant(merchantData.data.merchant);
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
  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }
  return (
    <section className="p-6 w-full productlist">
      <ToastContainer />
      <table className="w-full">
        <thead className="py-4 bg-secondary">
          <tr>
            <th className="border-r w-1/4 text-white">Name</th>
            <th className="border-r w-1/4 text-white">Email</th>
            <th className="border-r w-1/4 text-white">Role</th>
            <th className="border-r w-1/4 text-white">Approved/Reject</th>
          </tr>
        </thead>
        <tbody>
          {merchant.map((item, i) => (
            <tr key={item._id}>
              <td>
                #{++i} - {item?.merchant?.fullName}
              </td>
              <td>{item?.merchant?.email}</td>
              <td>{item?.merchant?.role}</td>
              <td className="flex items-center justify-evenly">
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
