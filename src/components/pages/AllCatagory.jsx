import { useEffect, useState } from "react";
import Loading from "../Loading";
import Heading from "../Heading";
import Popup from "../Popup";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { CatagoryData } from "../../api";
import { useNavigate } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
const AllCatagory = () => {
  const user = useSelector((state) => state.user_sec.user);
  const navigate = useNavigate();
  const [allCatagory, setAllCatagory] = useState([]);
  const [deletePopup, setDeletePopup] = useState(false);
  const [looding, setLooding] = useState(true);
  const [productId, setProductId] = useState("");
  useEffect(() => {
    const data = async () => {
      await CatagoryData(user?.auth)
        .then((res) => {
          setAllCatagory(res.data.catagory);
          setLooding(false);
        })
        .catch(() => {
          console.log("Unauthorized!");
        });
    };
    data();
  }, []);
  // Approved OR Pending Product
  const handelApprovedPendibg = (id) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}catagory/updatecatstatus`,
        {
          id: id,
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
        toast.info(res.data.message, {
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
  // Delete Caategory
  const handelDelete = (data) => {
    setDeletePopup(data);
    if (data) {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}catagory/deletecatagory`,
          {
            id: productId,
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
          toast.info(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setDeletePopup(false);
        })
        .catch((err) => {
          toast.error(err.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
        });
    }
  };
  const handeledit = (item) => {
    navigate(`/catagorydetails/:${item.name}?pid=${item._id}`);
  };
  if (looding) {
    return <Loading />;
  }
  return (
    <section className="mt-28 md:mt-0 md:p-10 w-full productlist">
      {/* Product Header Part Start */}
      <Heading title="All Catagories" />
      {/* Product Body Part Start */}
      <table className="w-full">
        <thead className="py-4 bg-secondary">
          <tr>
            <th className="border-r w-1/4 text-white">Catagory</th>
            <th className="border-r w-1/4 text-white">Last Update</th>
            <th className="border-r w-1/4 text-white">Status</th>
            <th className="border-r w-1/4 text-white">Details/Delete</th>
          </tr>
        </thead>
        <tbody>
          {allCatagory.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item?.update.slice(0, 10)}</td>
              <td>
                <button
                  onClick={() => handelApprovedPendibg(item._id)}
                  className={
                    item.status === "waiting"
                      ? "bg-red-500 text-white py-1 px-4 rounded-xl"
                      : "bg-green-500 text-white py-1 px-4 rounded-xl"
                  }
                >
                  {item.status}
                </button>
              </td>
              <td className="flex items-center justify-evenly">
                <button onClick={() => handeledit(item)} className="detail_btn">
                  <TbListDetails className="detail_icon" />
                </button>
                <button
                  onClick={() => {
                    setDeletePopup(true);
                    setProductId(item._id);
                  }}
                  className="delete_btn"
                >
                  <AiFillDelete className="blt_icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Delete Popup */}
      {deletePopup && <Popup sendData={handelDelete} />}
      <ToastContainer />
    </section>
  );
};

export default AllCatagory;
