import { Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { GiCrossMark } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateVarient = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [storage, setStorage] = useState("");
  const [productId, setProductId] = useState("");
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
    setFile(files[0]);
  };

  // Create Varient Part
  const hendelCreate = () => {
    axios
      .post(
        `http://localhost:8000/api/v1/product/createvariant`,
        {
          color,
          // image: file,
          price,
          quantity,
          size,
          storage,
          product: productId,
        },
        {
          headers: {
            Authorization: `Bearer user@65c99558521ab0a4fdf3de0d@fjoslskdfj3`,
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
    <div className=" bg-[#F5F5F5] p-6">
      <div className="productBox">
        <h2 className="title">Create Varient</h2>
        <div className="flex justify-around">
          <label className="primary w-2/5">
            Varient Name
            <input
              type="text"
              placeholder="Varient Name"
              className="inputField"
            />
          </label>

          <label className="primary w-2/5">
            Color Varient
            <input
              onChange={(e) => setColor(e.target.value)}
              type="text"
              placeholder="Varient Color"
              className="inputField"
            />
          </label>
        </div>
        <div className="flex justify-around">
          <label className="primary w-2/5">
            price Varient
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="price Varient"
              className="inputField"
            />
          </label>

          <label className="primary w-2/5">
            Quantity Varient
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              placeholder="Quantity Varient"
              className="inputField"
            />
          </label>
        </div>
        <div className="flex justify-around">
          <label className="primary w-2/5">
            Size Varient
            <input
              onChange={(e) => setSize(e.target.value)}
              type="text"
              placeholder="Size Varient"
              className="inputField"
            />
          </label>

          <label className="primary w-2/5">
            Storage Varient
            <input
              onChange={(e) => setStorage(e.target.value)}
              type="text"
              placeholder="Storage Varient"
              className="inputField"
            />
          </label>
        </div>
        <div className="w-full flex justify-center">
          <label className="primary w-4/5">
            Select Product *
            <Select
              placeholder="Select Product"
              onChange={handleSelect}
              options={options}
              className="input border-none"
            />
          </label>
        </div>
        <div className="flex flex-col items-center">
          <label className="primary pb-4 inline-block">
            Upload Image *
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
            {/* <img src={URL.createObjectURL(file[0])} className="shadow-2xl" /> */}
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
