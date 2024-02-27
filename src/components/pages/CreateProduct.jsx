import React, { useState } from "react";
import { Input, Button } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "JPG", "PDF"];

const CreateProduct = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(URL.createObjectURL(file[0]));
  };
  return (
    <section className="p-8">
      <label htmlFor="">Product Name</label>
      <Input placeholder="Product Name" />
      <br />
      <br />
      <label htmlFor="">Product Description</label>
      <Editor wrapperClassName="demo-wrapper" editorClassName="demo-editor" />
      <br />
      <br />
      <label htmlFor="">Upload Image</label>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <img src={file} />
      <br />
      <br />

      <Button type="primary" className="bg-blue-500">
        Create
      </Button>
    </section>
  );
};

export default CreateProduct;
