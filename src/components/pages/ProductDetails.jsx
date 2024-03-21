import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import { Select } from "antd";
import { productID } from "../../reducer/productIdSlice";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating";
import { ToastContainer, toast } from "react-toastify";
const ProductDetails = () => {
  const navigate = useNavigate();
  const productShortID = useSelector((state) => state.productID.product);
  const [product, setProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [variantID, setvariantID] = useState(0);
  const [reviewData, setReviewData] = useState({
    rating: "",
    email: "",
    comment: "",
    shortID: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch Data
    axios
      .post(`${import.meta.env.VITE_API_URL}product/findoneproduct`, {
        id: productShortID,
      })
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
  // All Product
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}product/getallproduct`)
      .then((res) => {
        setAllProduct(res.data.product);
      });
  }, []);
  // Product Selection Part
  const options = [];
  allProduct.map((item) => {
    options.push({
      value: item.shortID,
      label: `${item.shortID} ${item.slug}`,
    });
  });

  const handleSelect = (value, label) => {
    dispatch(productID(value));
    document.cookie = `product_short=${value};`;
    navigate(`/productdetails/${label.label.split(" ")[1]}`);
    window.location.reload();
  };

  const handelRate = (value) => {
    setReviewData({ ...reviewData, rating: value });
  };
  const handelSubmitReview = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}product/review`, {
        rating: reviewData.rating,
        comment: reviewData.comment,
        email: reviewData.email,
        shortID: productShortID,
      })
      .then((res) => {
        toast.success(res.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setReviewData({
          rating: "",
          email: "",
          comment: "",
          shortID: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full p-6">
      <ToastContainer />
      <div className="border-b pb-4 mb-6 flex justify-around">
        <h2 className="title">Product Details</h2>
        <label className="primary flex gap-3">
          Select Product :
          <Select
            placeholder="Product ID"
            onChange={handleSelect}
            options={options}
            className="block w-56"
          />
        </label>
      </div>
      {/* Product Details */}
      <div className="flex gap-6">
        <div className="w-1/2 flex gap-2 product_image">
          {product?.variant.map((item, i) => (
            <div
              onClick={() => setvariantID(i)}
              key={item._id}
              className={`border rounded-lg overflow-hidden cursor-pointer ${
                i === variantID ? "active" : ""
              }`}
            >
              <img src={item?.image} alt="img" />
            </div>
          ))}
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
                  ? "bg-red-500 text-white py-1 px-4 rounded-xl capitalize"
                  : "bg-green-500 text-white py-1 px-4 rounded-xl capitalize"
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
              <h3 className="title mb-2 text-start text-brand">
                {product?.variant[variantID]?.price}Tk
              </h3>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                Color:
              </p>
              <ul className="flex gap-1 items-center mt-2 product_color">
                {product?.variant.map((item, i) => (
                  <li
                    key={item?._id}
                    className={`${i === variantID ? "active" : ""}`}
                  >
                    <span
                      onClick={() => setvariantID(i)}
                      style={{ backgroundColor: item.color }}
                      className={`w-6 h-6 cursor-pointer rounded-full border inline-block`}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>
            {product?.variant[variantID]?.size && (
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
            )}
            {product?.variant[variantID]?.storage && (
              <div className="flex gap-2 items-center my-4">
                <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                  Size:
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
            )}
            <div className="flex gap-2 items-center mt-2">
              <p className="text-xl font-sans uppercase font-semibold text-primary  text-start">
                Quantity:
                <span className="py-1 px-2 rounded-sm text-brand title">
                  {product?.variant[variantID]?.price}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <p className="title text-start mb-2">Product Details:</p>
        <p className="basic">{product?.description}</p>
      </div>
      {/* Customer Review */}
      <div className="my-4">
        <p className="title text-start mb-2 mt-8">Customer Review (5) :</p>
        {product?.reviews.map((item) => (
          <div key={item._id} className="border-b pb-3 my-3">
            <div className="flex gap-2 items-center pb-2">
              <p className="basic">{item?.userId?.fullName}</p>
              <ul className="flex gap-1 text-orange-400">
                <li>
                  <FaStar className="text-yellow-500" />
                </li>
              </ul>
            </div>
            <p className=" font-sans text-secondary">{item?.comment}</p>
          </div>
        ))}
        {/* Add Review */}
        <div className="w-1/4">
          <p className="title mt-8 mb-3 text-start">Add Review</p>
          <p className="basic">Your Rating</p>
          <StarRating getRate={handelRate} />
          <div className="mt-5">
            <label className="basic">
              Email
              <input
                value={reviewData.email}
                type="email"
                placeholder="Your email.."
                className="inputField ml-0"
                onChange={(e) =>
                  setReviewData({ ...reviewData, email: e.target.value })
                }
              />
            </label>
            <label className="basic">
              Review
              <textarea
                value={reviewData.comment}
                type="email"
                placeholder="Your opinion"
                className="inputField ml-0"
                onChange={(e) =>
                  setReviewData({ ...reviewData, comment: e.target.value })
                }
              />
            </label>
          </div>
          <button onClick={handelSubmitReview} className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
