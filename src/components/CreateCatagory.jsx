import { Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CreateCatagory = () => {
  const [name, setName] = useState("");

  const handelSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}catagory/createcatagory`, {
        name: name,
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
    <div className="productBox w-4/5 m-auto flex flex-col items-center gap-6 border border-slate-200">
      <ToastContainer />
      <h2 className="title">Create Catagory</h2>
      <label className="primary w-full">
        Catagory Name *
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Catagory Name"
          className="input w-full"
        />
      </label>

      <button onClick={handelSubmit} className="btn w-fit">
        Create
      </button>
    </div>
  );
};

export default CreateCatagory;
