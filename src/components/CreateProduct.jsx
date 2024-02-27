import { useState } from "react";
import { Input, Select } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FileUploader } from "react-drag-drop-files";
import { GiCrossMark } from "react-icons/gi";

const CreateProduct = () => {
  // Image Upload Part
  const fileTypes = ["JPEG", "PNG", "JPG", "PDF"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(URL.createObjectURL(file[0]));
  };

  // Varient Selection Part
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleSelect = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="bg-[#F5F5F5] p-6">
      <div className="productBox">
        <h2 className="title">Create Product</h2>
        <label className="primary">Product Name *</label>
        <Input placeholder="Product Name" className="input" />

        <label className="primary">Product Description *</label>
        <Editor
          wrapperClassName="demo-wrapper input"
          editorClassName="demo-editor"
        />
        <label className="primary">Select Varient *</label>
        <Select
          placeholder="Select Varient"
          onChange={handleSelect}
          options={options}
          className="input"
        />
        <label className="primary">Product Slug *</label>
        <Input placeholder="Product Slug" className="input" />

        <label className="primary mb-4 inline-block">Upload Image *</label>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <div className="m-5 border p-1 w-fit">
          {file && (
            <GiCrossMark
              className="ml-auto cursor-pointer text-xl m-2 text-red-600"
              onClick={() => setFile(null)}
            >
              X
            </GiCrossMark>
          )}
          <img src={file} className="shadow-2xl" />
        </div>

        <button className="btn">Create Product</button>
      </div>
    </div>
  );
};

export default CreateProduct;
