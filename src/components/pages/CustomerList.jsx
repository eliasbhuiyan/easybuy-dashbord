import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

const CustomerList = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}auth/userlist`, {
        headers: {
          Authorization: `Bearer user@${user?.auth}@${
            import.meta.env.VITE_SWTSECRT
          }`,
        },
      })
      .then((res) => {
        setUserList(res.data.user);
        console.log(res.data.user[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="p-6 w-full productlist">
      <table className="w-full">
        <thead className="py-4 bg-secondary">
          <tr>
            <th className="border-r text-white">Avatar</th>
            <th className="border-r text-white">Customer Name</th>
            <th className="border-r text-white">Registration Date</th>
            <th className="border-r text-white">Mail</th>
            <th className="border-r text-white">Phone</th>
            <th className="border-r text-white">Country</th>
            <th className="border-r text-white">Total Order</th>
            <th className="border-r text-white">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((data) => (
            <tr key={data._id}>
              <td>{data?.avatar} UserImage</td>
              <td>{data?.fullName}</td>
              <td>{data?.create}</td>
              <td>{data?.email}</td>
              <td>{data?.phone}</td>
              <td>{data?.addressOne}</td>
              <td>{data?.totalOrder}</td>
              <td className="flex items-center justify-evenly">
                <button className="edit_btn">
                  <FaEdit className="edit_icon" />
                </button>
                <button className="delete_btn">
                  <AiFillDelete className="blt_icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
