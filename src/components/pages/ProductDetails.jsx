import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import Loading from "../Loading";
const ProductDetails = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const productID = window.location.hash.substring(1);

  useEffect(() => {
    // Fetch Data
    axios
      .post(
        `${import.meta.env.VITE_API_URL}product/findoneproduct`,
        {
          id: `#${productID}`,
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
        setProduct(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full p-6">
      <div className="border-b pb-4 mb-6 flex justify-around">
        <h2 className="title">Product Details</h2>
        <label className="basic">
          Search By ID:
          <select className="border">
            <option value="" disabled hidden>
              Product ID
            </option>
            <option value="">#2433</option>
            <option value="">#2433</option>
            <option value="">#2433</option>
          </select>
        </label>
      </div>
      <div className="flex gap-6">
        <div className="w-1/2">
          <div className="flex gap-1">
            {product?.variant?.map((item) => (
              <div key={item?._id} className="border">
                <img src={item?.image} alt="img" />
              </div>
            ))}
          </div>
          <div className="w-56 flex gap-1 m-auto mt-2">
            {product?.variant?.map((item) => (
              <div key={item?._id} className="border">
                <img src={item?.image} alt="img" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <h3 className="title mb-2 text-start capitalize">
              {product?.name}
            </h3>
            <h4 className="title mb-2 text-start capitalize">
              ID: {product?.shortID}
            </h4>
            <button
              className={
                product?.status === "pending"
                  ? "bg-red-500 text-white py-1 px-4 rounded-xl"
                  : "bg-green-500 text-white py-1 px-4 rounded-xl"
              }
            >
              {product?.status}
            </button>
            <div className="flex items-center gap-2 my-2">
              <ul className="flex gap-1 text-orange-400">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
              </ul>
              <p>8 Reviews</p>
            </div>
            <div className="border-b">
              {product?.variant?.map((item) => (
                <h3
                  key={item?._id}
                  className="title mb-0 text-start text-brand"
                >
                  {item?.price}Tk
                </h3>
              ))}
            </div>
            <div className="flex gap-2 items-center mt-4">
              <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                Color:
              </p>
              <ul className="flex gap-1 items-center mt-2">
                {product?.variant?.map((item) => (
                  <li key={item?._id}>
                    <span
                      className={`w-6 h-6 cursor-pointer rounded-full border bg-[${item?.color}] inline-block`}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 items-center my-4">
              <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                Size:
              </p>
              <ul className="flex gap-1 items-center">
                {product?.variant?.map((item) => (
                  <li key={item?._id}>
                    <span className="py-1 px-2 rounded-sm border inline-block">
                      {item?.size}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 items-center my-4">
              <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                Storage:
              </p>
              <ul className="flex gap-1 items-center">
                {product?.variant?.map((item) => (
                  <li key={item?._id}>
                    <span className="py-1 px-2 rounded-sm border inline-block">
                      {item?.storage}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                Quantity:
                {product?.variant?.map((item) => (
                  <li key={item?._id}>
                    <span className="py-1 px-2 rounded-sm border inline-block">
                      {item?.quantity}
                    </span>
                  </li>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <p className="title text-start mb-2">Product Details:</p>
        <p className="basic">{product?.description}</p>
      </div>
      <div className="my-4">
        <p className="title text-start mb-2 mt-8">Customer Review (5) :</p>
        <div className="border-b pb-3 my-3">
          <div className="flex gap-2 items-center pb-2">
            <p className="basic">User Name</p>
            <ul className="flex gap-1 text-orange-400">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
          </div>
          <p className=" font-sans text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error
            fugiat eos voluptates itaque nemo.
          </p>
        </div>
        <div className="border-b pb-3 my-3">
          <div className="flex gap-2 items-center pb-2">
            <p className="basic">User Name</p>
            <ul className="flex gap-1 text-orange-400">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaRegStar />
              </li>
            </ul>
          </div>
          <p className=" font-sans text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error
            fugiat eos voluptates itaque nemo.
          </p>
        </div>
        <div className="w-1/4">
          <p className="title mt-8 mb-3 text-start">Add Review</p>
          <label className="basic">
            Name
            <input
              type="text"
              placeholder="Your name.."
              className="inputField ml-0"
            />
          </label>
          <label className="basic">
            Email
            <input
              type="email"
              placeholder="Your email.."
              className="inputField ml-0"
            />
          </label>
          <label className="basic">
            Review
            <textarea
              type="email"
              placeholder="Your opinion"
              className="inputField ml-0"
            />
          </label>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
