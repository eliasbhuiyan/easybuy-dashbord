import Lottie from "lottie-react";
import loodingData from "../assets/Looding.json";
const Loading = () => {
  return (
    <div className="flex justify-center items-start h-screen">
      <Lottie className="w-3/5" animationData={loodingData} loop={true} />
    </div>
  );
};

export default Loading;
