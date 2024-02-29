import { useState } from "react";
import { Input } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FileUploader } from "react-drag-drop-files";
import { GiCrossMark } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CreateProduct = () => {
  // Image Upload Part
  const fileTypes = ["JPEG", "PNG", "JPG", "PDF"];
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [pslug, setpSlug] = useState("");
  const handleChange = (file) => {
    setImage(file[0].name);
    setFile(URL.createObjectURL(file[0]));
  };

  // Product Creation Part
  const hendelCreate = () => {
    try {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}product/createproduct`,
          {
            name: name,
            description: descriptions,
            img: image,
            imageAlt: imageAlt,
            slug: pslug,
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
          setName("");
          setDescriptions("");
          setImage("");
          setpSlug("");
          setFile(null);
        })
        .catch((err) => {
          toast.error(err.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
        });
    } catch {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        theme: "light",
      });
    }
  };
  return (
    <div className="bg-[#F5F5F5] p-6">
      <div className="productBox">
        <h2 className="title">Create Product</h2>
        <label className="primary">Product Name *</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="input"
        />

        <label className="primary">Product Description *</label>
        <Editor
          value={descriptions}
          onChange={(e) => setDescriptions(e.blocks[0].text)}
          wrapperClassName="demo-wrapper input"
          editorClassName="demo-editor"
        />
        <label className="primary">Product Slug *</label>
        <Input
          value={pslug}
          onChange={(e) => setpSlug(e.target.value)}
          placeholder="Product Slug"
          className="input"
        />

        <div className="flex justify-between w-4/5">
          <label className="primary mb-4 inline-block w-2/5">
            Upload Image *
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </label>
          <label className="primary w-2/5">
            Image Alt *
            <Input
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
              placeholder="Image Alt"
              className="input"
            />
          </label>
        </div>
        <div className="m-5 border p-1 w-fit">
          {file && (
            <GiCrossMark
              className="ml-auto cursor-pointer text-xl m-2 text-red-600"
              onClick={() => setFile(null)}
            ></GiCrossMark>
          )}
          <img src={file} className="shadow-2xl" />
        </div>

        <button onClick={hendelCreate} className="btn">
          Create Product
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateProduct;
