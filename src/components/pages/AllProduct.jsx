import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
const AllProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetch Data
    const data = axios
      .get(`${import.meta.env.VITE_API_URL}product/getallproduct`)
      .then((res) => {
        setProduct(res.data.product);
      });
  }, []);
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
                #{++index} {item.name}
              </td>
              <td>{item.description}</td>
              <td>
                <img
                  className="w-16 h-16 m-auto border"
                  src={item.img}
                  alt=""
                />
              </td>
              <td>Cetagory</td>
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
    </section>
  );
};

export default AllProduct;
