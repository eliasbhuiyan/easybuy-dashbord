import { useEffect, useState } from "react";
import CustomerOrder from "../CustomerOrder";
import CustomerProfile from "../CustomerProfile";
import { FindUser } from "../../api";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Loading from "../Loading";

const CustomerDetails = () => {
  let [searchParams] = useSearchParams();
  const user = useSelector((state) => state.user_sec.user);
  const [userData, setUserData] = useState(null);
  const [looding, setLooding] = useState(true);
  useEffect(() => {
    const data = async () => {
      await FindUser(user?.auth, searchParams.get("uid"))
        .then((res) => {
          setUserData(res.data.user);
          setLooding(false);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLooding(false);
        });
    };
    data();
  }, []);
  if(looding){
    return <Loading/>
  }
  return (
    <div className="w-full p-9 bg-slate-100">
      <div className="relative">
        <h2 className="title text-3xl border-b pb-5">Customer Details</h2>
        <h3 className="heading_bg">Customer</h3>
      </div>
      <div className="flex gap-6">
        <CustomerProfile userData= {userData} />
        <CustomerOrder />
      </div>
    </div>
  );
};

export default CustomerDetails;
