import { Input, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector } from "react-redux";
import { CatagoryData } from "../api";
const CreateSubCatagory = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [name, setName] = useState("");
  const [allCatagory, setAllCatagory] = useState([]);
  const [catagoryId, setCatagoryId] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    const data = async () => {
      await CatagoryData(user?.auth)
        .then((res) => {
          setAllCatagory(res.data.catagory);
        })
        .catch(() => {
          console.log("Unauthorized!");
        });
    };
    data();
  }, []);
  // Catagory Selection Part
  const options = [];
  allCatagory.map((item) => {
    options.push({
      value: item._id,
      label: `${item.name}`,
    });
  });
  const handleSelect = (value) => {
    setCatagoryId(value);
  };
  const handelSubmit = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}catagory/createsubcatagory`,
        {
          name: name,
          catagory: catagoryId,
          description: draftToHtml(
            convertToRaw(editorState.getCurrentContent())
          ),
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
      <h2 className="title">Create sub catagory</h2>
      <label className="basic w-full">Sub Catagory Name *</label>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Sub Catagory Name"
        className="input w-full text-lg"
      />
      <label className="basic pt-8 inline-block w-full">
        SubCatagory Description *
      </label>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper input w-full rounded-lg"
        editorClassName="demo-editor"
        onEditorStateChange={(value) => setEditorState(value)}
      />
      <label className="basic w-full">Select Catagory *</label>
      <Select
        placeholder="Select Product"
        onChange={handleSelect}
        options={options}
        className="border-none w-full"
      />
      <button onClick={handelSubmit} className="btn w-fit px-5 py-3 lg:px-8">
        Create
      </button>
    </div>
  );
};

export default CreateSubCatagory;
