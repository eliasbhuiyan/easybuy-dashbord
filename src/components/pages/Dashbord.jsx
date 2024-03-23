import { FaBox, FaUsers, FaShoppingCart } from "react-icons/fa";
import { BiCategoryAlt, BiSolidHappyHeartEyes } from "react-icons/bi";
import { MdSell } from "react-icons/md";
import DashbordCart from "../DashbordCart";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CatagoryData, ProductData, UserList } from "../../api";
import Loading from "../Loading";
const Dashbord = () => {
  const [looding, setLooding] = useState(true);
  const user = useSelector((state) => state.user_sec.user);
  const [chartData, setChartData] = useState({
    customers: "",
    products: "",
    orders: "",
    categories: "",
    sell: "",
    visitors: "",
  });
  useEffect(() => {
    // Total User Data
    UserList(user.auth).then((res) => {
      setChartData((prevChartData) => ({
        ...prevChartData,
        customers: res.data.user.length,
      }));
    });

    // Total Catagory Data
    CatagoryData(user.auth).then((res) => {
      setChartData((prevChartData) => ({
        ...prevChartData,
        categories: res.data.catagory.length,
      }));
    });

    // Total Product Data
    ProductData().then((res) => {
      setChartData((prevChartData) => ({
        ...prevChartData,
        products: res.data.product.length,
      }));
      setLooding(false);
    });
  }, []);

  if (looding) {
    return <Loading />;
  }
  return (
    <section className="p-10 w-full">
      <div className="flex gap-6 flex-wrap">
        <DashbordCart
          title="Total Customers"
          icon={<FaUsers />}
          value={chartData.customers}
        />
        <DashbordCart
          title="Total Products"
          icon={<FaBox />}
          value={chartData.products}
        />
        <DashbordCart
          title="Total Orders"
          icon={<FaShoppingCart />}
          value={10}
        />
        <DashbordCart
          title="Total Categories"
          icon={<BiCategoryAlt />}
          value={chartData.categories}
        />
        <DashbordCart title="Total Sell" icon={<MdSell />} value={10} />
        <DashbordCart
          title="Total Visitors"
          icon={<BiSolidHappyHeartEyes />}
          value={10}
        />
      </div>
    </section>
  );
};

export default Dashbord;
