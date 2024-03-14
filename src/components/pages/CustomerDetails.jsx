import CustomerOrder from "../CustomerOrder";
import CustomerProfile from "../CustomerProfile";

const CustomerDetails = () => {
  return (
    <div className="w-full p-9 bg-slate-100">
      <div>
        <h2 className="title border-b pb-5">Customer Details</h2>
      </div>
      <div className="flex gap-6">
        <CustomerProfile />
        <CustomerOrder />
      </div>
    </div>
  );
};

export default CustomerDetails;
