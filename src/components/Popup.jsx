import { AiFillDelete } from "react-icons/ai";
const Popup = ({ sendData }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-[999]">
      <div className="w-[250px] flex flex-col p-4 items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
        <div>
          <div className="text-center p-3 flex-auto justify-center">
            <AiFillDelete className="text-6xl text-secondary m-auto" />
            <h2 className="text-xl font-bold py-4 text-gray-200">
              Are you sure?
            </h2>
            <p className="text-sm text-gray-500 px-2">
              Do you really want to delete this product? This process cannot be
              undone
            </p>
          </div>
          <div className="p-2 mt-2 text-center space-x-1 md:block">
            <button
              onClick={() => sendData(false)}
              className="mb-2 md:mb-0 bg-green-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-green-600 hover:border-green-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-green-800 transition ease-in duration-300"
            >
              Cancel
            </button>
            <button
              onClick={() => sendData(true)}
              className="bg-red-500 hover:bg-red-600 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-300 hover:border-red-500 text-white rounded-full transition ease-in duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
