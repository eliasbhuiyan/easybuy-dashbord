import { FaBox } from "react-icons/fa";
import DashbordCart from "../DashbordCart";
const Dashbord = () => {
  return (
    <section className="p-10 w-full bg-no-repeat bg-center">
      <div className="flex gap-6">
        <DashbordCart title="Total Customers" icon={<FaBox />} value={10}/>
        <DashbordCart title="Total Products" icon={<FaBox />} value={10}/>
        <DashbordCart title="Total Orders" icon={<FaBox />} value={10}/>
      </div>
      <div className="flex gap-6 my-6">
        <DashbordCart title="Total Categories" icon={<FaBox />} value={10}/>
        <DashbordCart title="Total Sell" icon={<FaBox />} value={10}/>
        <DashbordCart title="Total Visitors" icon={<FaBox />} value={10}/>
      </div>
    </section>
  );
};

export default Dashbord;
