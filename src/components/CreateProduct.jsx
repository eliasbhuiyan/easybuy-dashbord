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
import { useSelector } from "react-redux";
import { SubCatagoryData } from "../api";

const CreateProduct = () => {
  const user = useSelector((state) => state.user_sec.user);
  const fileTypes = ["JPEG", "PNG", "JPG", "PDF"];
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image, setImage] = useState();
  const [imageAlt, setImageAlt] = useState("");
  const [pslug, setpSlug] = useState("");
  const [subCatagoryId, setSubCatagoryId] = useState("");
  const [allSubCatagory, setAllSubCatagory] = useState([]);
  // Image Upload Part
  const handleChange = (file) => {
    setImage(file[0]);
    setFile(URL.createObjectURL(file[0]));
  };
  // All SubCatagory
  useEffect(() => {
    const data = async () => {
      await SubCatagoryData(user?.auth).then((res) => {
        setAllSubCatagory(res.data.subCatagory);
      });
    };
    data();
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

  const hendelCreate = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${import.meta.env.VITE_API_URL}product/createproduct`,
          {
            name,
            image,
            description: draftToHtml(
              convertToRaw(editorState.getCurrentContent())
            ),
            imageAlt: imageAlt,
            slug: pslug,
            subCatagory: subCatagoryId,
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
    <div className="bg-[#F5F5F5] mt-28 md:mt-0 md:p-10">
      <form className="productBox">
        <h2 className="title">Create Product</h2>
        <label className="basic">Product Name *</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="input mt-2 text-lg"
        />

        <label className="pt-8 inline-block">
          <span className="basic">Product Description *</span>
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper input w-full rounded-lg mt-2"
            editorClassName="demo-editor"
            onEditorStateChange={(value) => setEditorState(value)}
          />
        </label>
        <div className="flex gap-4 flex-col md:flex-row justify-between w-full lg:w-4/5 my-8">
          <label className="w-full lg:w-2/5">
            <span className="basic">Product Slug *</span>
            <Input
              value={pslug}
              onChange={(e) => setpSlug(e.target.value)}
              placeholder="Product Slug"
              className="input w-full mt-2 text-lg"
            />
          </label>
          <label className="w-full lg:w-2/5">
            <span className="basic">Select SubCatagory *</span>
            <Select
              placeholder="Select Product"
              onChange={handleSelect}
              options={options}
              className="block mt-2 text-lg"
            />
          </label>
        </div>

        <div className="flex gap-4 flex-col lg:flex-row justify-between w-full lg:w-4/5">
          <label className="mb-4 inline-block w-full lg:w-2/5">
            <span className="basic inline-block mb-2">Upload Image *</span>
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="image"
              types={fileTypes}
            />
          </label>
          <label className="w-full lg:w-2/5">
            <span className="basic">Image Alt *</span>
            <Input
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
              placeholder="Image Alt"
              className="input mt-2"
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

        <button
          onClick={hendelCreate}
          className="btn m-auto block px-5 py-3 lg:px-8"
        >
          Create Product
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateProduct;
