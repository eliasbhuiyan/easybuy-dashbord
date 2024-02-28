import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const AllProduct = () => {
  return (
    <section className="p-6 w-full productlist">
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
          <tr>
            <td>Product Name</td>
            <td>Product Description</td>
            <td>
              <img
                className="w-16 h-16 m-auto border"
                src="/404page.png"
                alt=""
              />
            </td>
            <td>Cetagory</td>
            <td className="flex items-center justify-evenly">
              <button class="edit_btn">
                <FaEdit className="edit_icon" />
              </button>
              <button class="delete_btn">
                <AiFillDelete className="blt_icon" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>Product Description</td>
            <td>
              <img
                className="w-16 h-16 m-auto border"
                src="/404page.png"
                alt=""
              />
            </td>
            <td>Cetagory</td>
            <td className="flex items-center justify-evenly">
              <button class="edit_btn">
                <FaEdit className="edit_icon" />
              </button>
              <button class="delete_btn">
                <AiFillDelete className="blt_icon" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AllProduct;
