import { Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { GiCrossMark } from "react-icons/gi";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductData } from "../api";
const CreateVarient = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [allProduct, setAllProduct] = useState([]);
  const [color, setColor] = useState("");
  const [image, setImage] = useState();
  const [originalPrice, setOriginalPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [storage, setStorage] = useState("");
  const [productId, setProductId] = useState("");
  // All Product
  useEffect(() => {
    const data = async () => {
      await ProductData(user?.auth).then((res) => {
        setAllProduct(res.data.product);
      });
    };
    data();
  }, []);

  // Product Selection Part
  const options = [];
  allProduct.map((item) => {
    options.push({
      value: item._id,
      label: `${item.shortID}-${item.name}`,
    });
  });

  const handleSelect = (value) => {
    setProductId(value);
  };
  // Image Upload Part
  const fileTypes = ["JPEG", "PNG", "JPG", "PDF"];
  const [file, setFile] = useState(null);
  const handleChange = async (files) => {
    setImage(files[0]);
    setFile(URL.createObjectURL(files[0]));
  };
  // Create Varient Part
  const hendelCreate = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}product/createvariant`,
        {
          color,
          image,
          originalPrice,
          sellingPrice,
          quantity,
          size,
          storage,
          product: productId,
        },
        {
          headers: {
            Authorization: `Bearer user@${user?.auth}@${
              import.meta.env.VITE_SWTSECRT
            }`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message, {
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
  return (
    <div className="bg-[#F5F5F5] p-6">
      <div className="productBox">
        <h2 className="title">Create Varient</h2>
        <div className="flex gap-5 flex-col md:flex-row justify-around my-8">
          <label className="basic w-full md:w-2/5">
            Color Varient
            <input
              onChange={(e) => setColor(e.target.value)}
              type="text"
              placeholder="Varient Color"
              className="inputField"
            />
          </label>

          <label className="basic w-full md:w-2/5">
            Quantity Varient
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              placeholder="Quantity Varient"
              className="inputField"
            />
          </label>
        </div>
        <div className="flex gap-5 flex-col md:flex-row justify-around mb-8">
          <label className="basic w-full md:w-2/5">
            Size Varient
            <input
              onChange={(e) => setSize(e.target.value)}
              type="text"
              placeholder="Size Varient"
              className="inputField"
            />
          </label>

          <label className="basic w-full md:w-2/5">
            Storage Varient
            <input
              onChange={(e) => setStorage(e.target.value)}
              type="text"
              placeholder="Storage Varient"
              className="inputField"
            />
          </label>
        </div>
        <div className="flex gap-5 flex-col md:flex-row justify-around">
          <label className="basic w-full md:w-2/5">
            Original Price
            <input
              onChange={(e) => setOriginalPrice(e.target.value)}
              type="number"
              placeholder="Original Price"
              className="inputField"
            />
          </label>
          <label className="basic w-full md:w-2/5">
            Selling Price
            <input
              onChange={(e) => setSellingPrice(e.target.value)}
              type="number"
              placeholder="Selling price"
              className="inputField"
            />
          </label>
        </div>
        <div className="w-full mb-5 flex flex-col md:flex-row justify-center mt-4">
          <label className="basic w-full md:w-2/5">
            Select Product *
            <Select
              placeholder="Select Product"
              onChange={handleSelect}
              options={options}
              className="block mt-2"
            />
          </label>
        </div>
        <div className="flex gap-5 flex-col items-center">
          <label className="basic pb-4 inline-block">
            <span className="mb-2 inline-block">Upload Image *</span>
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </label>

          <div className="m-5 border p-1 w-fit">
            {file && (
              <GiCrossMark
                className="ml-auto cursor-pointer text-xl m-2 text-red-600"
                onClick={() => setFile(null)}
              >
                X
              </GiCrossMark>
            )}
            <img src={file} className="shadow-2xl" />
          </div>
        </div>
        <button onClick={hendelCreate} className="btn m-auto block">
          Create Varient
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateVarient;
