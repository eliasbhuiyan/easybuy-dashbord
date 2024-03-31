import { Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
const CreateCatagory = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [name, setName] = useState("");

  const handelSubmit = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}catagory/createcatagory`,
        {
          name: name,
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
    <div className="mt-28 md:mt-0 md:p-10 productBox w-4/5 m-auto flex flex-col items-center gap-6 border border-slate-200">
      <ToastContainer />
      <h2 className="title">Create catagory</h2>
      <label className="basic w-full">Catagory Name *</label>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Catagory Name"
        className="input w-full text-lg"
      />
      <label className="basic pt-8 inline-block w-full">
        Catagory Description *
      </label>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper input w-full rounded-lg"
        editorClassName="demo-editor"
        onEditorStateChange={(value) => setEditorState(value)}
      />
      <button onClick={handelSubmit} className="btn w-fit px-5 py-3 lg:px-8">
        Create
      </button>
    </div>
  );
};

export default CreateCatagory;
