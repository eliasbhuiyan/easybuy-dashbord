import { useState } from "react";
import { Input, Select } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FileUploader } from "react-drag-drop-files";
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
        <label className="primary mb-2 inline-block">Product Name</label>
        <Input placeholder="Product Name" />
        <br />
        <br />
        <label className="primary mb-2 inline-block">Product Description</label>
        <Editor wrapperClassName="demo-wrapper" editorClassName="demo-editor" />
        <br />
        <br />
        <label className="primary mb-2 inline-block">Select Varient</label>
        <Select
          mode="tags"
          style={{
            width: "100%",
          }}
          placeholder="Tags Mode"
          onChange={handleSelect}
          options={options}
          className="bg-[#F5F5F5]"
        />
        <br />
        <br />
        <label className="primary mb-2 inline-block">Upload Image</label>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <img src={file} />
        <br />
        <br />

        <button className="btn">Create Product</button>
      </div>
    </div>
  );
};

export default CreateProduct;
