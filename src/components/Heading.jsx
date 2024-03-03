import { BsFillSearchHeartFill } from "react-icons/bs";

const Heading = ({ title }) => {
  return (
    <div className="flex justify-around">
      <h1 className="title">{title}</h1>
      <div className="search">
        <input type="text" placeholder="Search" />
        <BsFillSearchHeartFill className="cursor-pointer text-xl" />
      </div>
    </div>
  );
};

export default Heading;
