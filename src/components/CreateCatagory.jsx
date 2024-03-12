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
      <label className="primary pt-8 inline-block w-full">
        Catagory Description *
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper input w-full rounded-lg"
          editorClassName="demo-editor"
          onEditorStateChange={(value) => setEditorState(value)}
        />
      </label>
      <button onClick={handelSubmit} className="btn w-fit">
        Create
      </button>
    </div>
  );
};

export default CreateCatagory;
