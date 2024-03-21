import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "../Popup";
import Loading from "../Loading";
import Heading from "../Heading";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productID } from "../../reducer/productIdSlice";
import { ProductData } from "../../api";

const AllProduct = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [product, setProduct] = useState([]);
  const [deletePopup, setDeletePopup] = useState(false);
  const [looding, setLooding] = useState(true);
  const [productKey, setProductKey] = useState("");
  const [realtime, setRealtime] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = async () => {
      await ProductData(user?.auth)
        .then((res) => {
          setProduct(res.data.product);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLooding(false);
        });
    };
    data();
  }, [realtime]);
  // Approved OR Pending Product
  const handelApprovedPendibg = (id) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}product/approvedproduct`,
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
        setRealtime(!realtime);
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
  // Delete Product
  const handelDelete = (data) => {
    setDeletePopup(data);
    if (data) {
      axios
        .post(
          "http://localhost:8000/api/v1/product/deleteproduct",
          {
            id: productKey,
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
          setRealtime(!realtime);
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
  const handelEdit = () => {
    toast.info("Admin Action Only", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      theme: "light",
    });
  };
  if (looding) {
    return <Loading />;
  }
  return (
    <section className="p-6 w-full productlist">
      {/* Product Header Part Start */}
      <Heading title="All Product" />
      {/* Product Body Part Start */}
      <table className="w-full">
        <thead className="py-4 bg-secondary">
          <tr>
            <th className="border-r w-1/6 text-white">Name</th>
            <th className="border-r w-1/6 text-white">Description</th>
            <th className="border-r w-1/6 text-white">Image</th>
            <th className="border-r w-1/6 text-white">Cetagory</th>
            <th className="border-r w-1/6 text-white">Status</th>
            <th className="border-r w-1/6 text-white">Details/Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item._id}>
              <td>
                <p
                  
                >
                  {item.shortID} - {item.name.substring(0, 20)}
                </p>
              </td>
              <td>{item.description.substring(0, 20)}...</td>
              <td>
                <img
                  className="w-16 h-16 m-auto border"
                  src={item.image}
                  alt={item.imageAlt}
                />
              </td>
              <td>{item?.subCatagory?.name}</td>
              <td>
                <button
                  onClick={() => handelApprovedPendibg(item._id)}
                  className={
                    item.status === "pending"
                      ? "bg-red-500 text-white py-1 px-4 rounded-xl"
                      : "bg-green-500 text-white py-1 px-4 rounded-xl"
                  }
                >
                  {item?.status}
                </button>
              </td>
              <td className="flex items-center justify-evenly">
                <Link 
                  onClick={() => {
                    dispatch(productID(item.shortID));
                    document.cookie = `product_short=${item.shortID};`;
                  }}
                  to={`/productdetails/${item.slug}`}
                className="detail_btn">
                  <TbListDetails className="detail_icon" />
                </Link>
                <button onClick={handelEdit} className="edit_btn">
                  <FaEdit className="edit_icon" />
                </button>
                <button
                  onClick={() => {
                    setDeletePopup(true);
                    setProductKey(item._id);
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
