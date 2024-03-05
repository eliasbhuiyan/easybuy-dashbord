import axios from "axios";
import { useEffect, useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Merchant = () => {
  let [merchant, setMerchant] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}auth/allmerchant`)
      .then((res) => {
        setMerchant(res.data.merchant);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="p-6 w-full productlist">
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
          {merchant.map((item,i) => (
            <tr key={item._id}>
              <td>#{++i} - {item?.merchant?.fullName}</td>
              <td>{item?.merchant?.email}</td>
              <td>{item?.merchant?.role}</td>
              <td className="flex items-center justify-evenly">
                <button className="approved_btn">
                  <IoCheckmarkDoneSharp className="edit_icon" />
                </button>
                <button className="reject_btn">
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
