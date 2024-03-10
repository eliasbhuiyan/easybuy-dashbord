import { useEffect, useState } from "react";
import { Input, Select } from "antd";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FileUploader } from "react-drag-drop-files";
import { GiCrossMark } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CreateProduct = () => {
  const fileTypes = ["JPEG", "PNG", "JPG", "PDF"];
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [pslug, setpSlug] = useState("");
  const [subCatagoryId, setSubCatagoryId] = useState("");
  const [allSubCatagory, setAllSubCatagory] = useState([]);

  // Image Upload Part
  const handleChange = (file) => {
    setImage(file[0].name);
    setFile(URL.createObjectURL(file[0]));
  };
  // All SubCatagory
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}catagory/getallsubcatagory`)
      .then((res) => {
        setAllSubCatagory(res.data.subCatagory);
      });
  }, []);
  // SubCatagory Selection Part
  const options = [];
  allSubCatagory.map((item) => {
    options.push({
      value: item._id,
      label: `${item.name}`,
    });
  });
  const handleSelect = (value) => {
    setSubCatagoryId(value);
  };
  // Product Creation Part
  const hendelCreate = () => {
    try {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}product/createproduct`,
          {
            name: name,
            img: image,
            description: draftToHtml(
              convertToRaw(editorState.getCurrentContent())
            ),
            imageAlt: imageAlt,
            slug: pslug,
            subCatagory: subCatagoryId,
          },
          {
            headers: {
              Authorization: `Bearer user@65e6ef0afcf13a6f203dd146@fjoslskdfj3`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setName("");
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
        <label className="primary">
          Product Name *
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            className="input"
          />
        </label>

        <label className="primary pt-8 inline-block">
          Product Description *
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper input w-full rounded-lg"
            editorClassName="demo-editor"
            onEditorStateChange={(value) => setEditorState(value)}
          />
        </label>

        <div className="flex justify-between w-4/5 my-8">
          <label className="primary w-2/5">
            Product Slug *
            <Input
              value={pslug}
              onChange={(e) => setpSlug(e.target.value)}
              placeholder="Product Slug"
              className="input w-full"
            />
          </label>
          <label className="primary w-2/5">
            Select SubCatagory *
            <Select
              placeholder="Select Product"
              onChange={handleSelect}
              options={options}
              className="block"
            />
          </label>
        </div>

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

        <button onClick={hendelCreate} className="btn m-auto block">
          Create Product
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateProduct;
