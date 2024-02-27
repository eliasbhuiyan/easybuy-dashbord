import { Select } from "antd";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { GiCrossMark } from "react-icons/gi";
const CreateVarient = () => {
  // Product Selection Part
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
  // Image Upload Part
  const fileTypes = ["JPEG", "PNG", "JPG", "PDF"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(URL.createObjectURL(file[0]));
  };
  return (
    <div className=" bg-[#F5F5F5] p-6">
      <div className="productBox">
        <div className="flex gap-4">
          <label className="primary w-full">
            Varient Name
            <input
              type="text"
              placeholder="Varient Name"
              className="inputField"
            />
          </label>

          <label className="primary w-full">
            Color Varient
            <input
              type="text"
              placeholder="Varient Color"
              className="inputField"
            />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="primary w-full">
            price Varient
            <input
              type="number"
              placeholder="price Varient"
              className="inputField"
            />
          </label>

          <label className="primary w-full">
            Quantity Varient
            <input
              type="number"
              placeholder="Quantity Varient"
              className="inputField"
            />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="primary w-full">
            Size Varient
            <input
              type="text"
              placeholder="Size Varient"
              className="inputField"
            />
          </label>

          <label className="primary w-full">
            Storage Varient
            <input
              type="text"
              placeholder="Storage Varient"
              className="inputField"
            />
          </label>
        </div>
        <div>
          <label className="primary">Select Product *</label>
          <Select
            placeholder="Select Product"
            onChange={handleSelect}
            options={options}
            className="input"
          />
        </div>
        <div>
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
        </div>
        <button className="btn">Create Varient</button>
      </div>
    </div>
  );
};

export default CreateVarient;
