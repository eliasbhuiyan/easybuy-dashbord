import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaUserSecret } from "react-icons/fa6";
import Loading from "../Loading";
import { Link, useNavigate } from "react-router-dom";
import { UserList } from "../../api";
import { TbListDetails } from "react-icons/tb";
const CustomerList = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [userList, setUserList] = useState([]);
  const [looding, setLooding] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    const data = async () => {
      await UserList(user?.auth)
        .then((res) => {
          setUserList(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLooding(false);
        });
    };
    data();
  }, []);
const handelDetails = (data)=>{
  const username = data.fullName.split(" ").join("-")
  navigate(`/customerdetails/:${username}?uid=${data._id}`);
}
  if (looding) {
    return <Loading />;
  }
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
              <td>
                {user?.avatar ? (
                  <img
                    src={user?.avatar}
                    alt="user"
                    className="w-12 h-12 m-auto rounded-full border"
                  />
                ) : (
                  <div className="w-12 h-12 text-3xl m-auto border rounded-full bg-secondary flex justify-center items-center text-white">
                    <FaUserSecret />
                  </div>
                )}
              </td>
              <td className="hover:text-brand">
                <Link className="py-8" to="/customerdetails">
                  {data?.fullName}
                </Link>
              </td>
              <td>{data?.create.slice(0, 10)}</td>
              <td>{data?.email}</td>
              <td>{data?.phone}</td>
              <td>{data?.addressOne}</td>
              <td>{data?.totalOrder}</td>
              <td className="flex items-center justify-evenly">
                <button onClick={() => handelDetails(data)} className="detail_btn">
                  <TbListDetails className="detail_icon" />
                </button>
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
