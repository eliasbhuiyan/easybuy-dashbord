import { Input, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CreateSubCatagory = () => {
  const [name, setName] = useState("");
  const [allCatagory, setAllCatagory] = useState([]);
  const [catagoryId, setCatagoryId] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}catagory/getallcatagory`)
      .then((res) => {
        setAllCatagory(res.data.catagory);
      });
  }, []);
  // SubCatagory Selection Part
  const options = [];
  allCatagory.map((item) => {
    options.push({
      value: item._id,
      label: `${item.name}`,
    });
  });
  console.log(allCatagory);
  const handleSelect = (value) => {
    setCatagoryId(value);
  };

  const handelSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}catagory/createsubcatagory`, {
        name: name,
        catagory: catagoryId,
      })
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setName("");
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
    <div className="productBox w-4/5 m-auto mt-6 flex flex-col items-center gap-6 border border-slate-200">
      <h2 className="title">Create Sub Catagory</h2>
      <label className="primary w-full">
        Sub Catagory Name *
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Sub Catagory Name"
          className="input w-full"
        />
      </label>
      <label className="primary w-full">
        Select Catagory *
        <Select
          placeholder="Select Product"
          onChange={handleSelect}
          options={options}
          className="input border-none"
        />
      </label>
      <button onClick={handelSubmit} className="btn w-fit">
        Create
      </button>
    </div>
  );
};

export default CreateSubCatagory;
