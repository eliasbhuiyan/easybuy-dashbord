import { FaUserSecret } from "react-icons/fa6";
import { GrMoreVertical } from "react-icons/gr";
import { IoSend } from "react-icons/io5";

const Chating = () => {
  return (
    <div className="container flex justify-center">
      <div className="w-2/3">
        <div className="nav-bar flex justify-between p-4 bg-brand">
          <div className="flex text-xl items-center gap-3 text-white">
            <FaUserSecret />
            <p>Customer Name</p>
          </div>
          <div>
            <GrMoreVertical className="text-white" />
          </div>
        </div>
        <div className="messages-area">
          <div className="message">Hello</div>
          <div className="message">Hi! How can I help you?</div>
          <div className="message"></div>
          <div className="message"></div>
          <div className="message"></div>
          <div className="message"></div>
        </div>
        <div className="sender-area">
          <div className="input-place w-full">
            <input
              placeholder="Send a message."
              className="send-input w-full"
              type="text"
            />
            <div className="send">
                <IoSend className="text-white"/>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Chating;
