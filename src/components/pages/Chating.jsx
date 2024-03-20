import { FaUserSecret } from "react-icons/fa6";
import { GrMoreVertical } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
const Chating = () => {
  return (
    <div className="flex gap-3 w-full py-4">
      <div className="w-1/3 h-full bg-slate-200">Chat List</div>
      <div className="w-2/3 h-full">
        <div className="rounded-tr-xl rounded-tl-xl flex justify-between p-4 bg-primary">
          <div className="flex text-xl items-center gap-3 text-white">
            <FaUserSecret />
            <p>Customer Name</p>
          </div>
          <div>
            <GrMoreVertical className="text-white" />
          </div>
        </div>
        <div className="overflow-y-scroll bg-secondary text-white h-4/5 px-3">
          <div className="flex items-center gap-2 my-2">
            <div className="w-10 h-10 rounded-full border flex justify-center items-center">
              <FaUserSecret />
            </div>
            <p className="text-xl">Hello</p>
          </div>
          <div className="flex items-center gap-2 justify-end my-2">
            <p className="text-xl">Hi! How can I help you ?</p>
            <div className="w-10 h-10 rounded-full border flex justify-center items-center">
              <FaUserSecret />
            </div>
          </div>
        </div>
        <div className="bg-primary p-4">
          <div className="input-place w-full">
            <input
              placeholder="Send a message."
              className="send-input w-full"
              type="text"
            />
            <div className="send">
              <IoSend className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chating;
