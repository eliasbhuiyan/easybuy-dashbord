import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "../Popup";
const AllProduct = () => {
  const [product, setProduct] = useState([]);
  const [deletePopup, setDeletePopup] = useState(false);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    // Fetch Data
    axios
      .get(`${import.meta.env.VITE_API_URL}product/getallproduct`)
      .then((res) => {
        setProduct(res.data.product);
      });
  }, []);

  // Delete Product
  const handelDelete = (data) => {
    setDeletePopup(data);
    if (data) {
      axios
        .post("http://localhost:8000/api/v1/product/deleteproduct", {
          id: productId,
        })
        .then((res) => {
          toast.info(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
        })
        .then(() => {
          setDeletePopup(false);
        });
    }
  };
  return (
    <section className="p-6 w-full productlist">
      {/* Product Header Part Start */}
      <div className="flex justify-around">
        <h1 className="title">All Product</h1>
        <div className="search">
          <input type="text" placeholder="Search" />
          <BsFillSearchHeartFill className="cursor-pointer text-xl" />
        </div>
      </div>
      {/* Product Body Part Start */}
      <table className="w-full">
        <thead className="py-4 bg-secondary">
          <tr>
            <th className="border-r w-1/5 text-white">Name</th>
            <th className="border-r w-1/5 text-white">Description</th>
            <th className="border-r w-1/5 text-white">Image</th>
            <th className="border-r w-1/5 text-white">Cetagory</th>
            <th className="border-r w-1/5 text-white">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item._id}>
              <td>
                #{++index} {item.name.substring(0, 20)}
              </td>
              <td>{item.description.substring(0, 20)}...</td>
              <td>
                <img
                  className="w-16 h-16 m-auto border"
                  src={item.img}
                  alt={item.imageAlt}
                />
              </td>
              <td>Cetagory</td>
              <td className="flex items-center justify-evenly">
                <button className="edit_btn">
                  <FaEdit className="edit_icon" />
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

export default AllProduct;
