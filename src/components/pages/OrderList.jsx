import { useEffect, useState } from "react";
import { OrderListData } from "../../api";
import { useSelector } from "react-redux";
import Heading from "../Heading";
import Loading from "../Loading";

const OrderList = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [orderList, setOrderList] = useState([]);
  const [looding, setLooding] = useState(true);
  useEffect(() => {
    OrderListData(user?.auth).then((res) => {
      setOrderList(res.data);
      setLooding(false);
    });
  }, []);
  if (looding) {
    return <Loading />;
  }
  return (
    <section className="mt-28 md:mt-0 md:p-10 w-full productlist">
      {/* Product Header Part Start */}
      <Heading title="Order List" />
      {/* Product Body Part Start */}
      <table className="w-full">
        <thead className="py-4 bg-secondary">
          <tr>
            <th className="border-r w-1/6 text-white">Order Id</th>
            <th className="border-r w-1/6 text-white">Item</th>
            <th className="border-r w-1/6 text-white">Customer Name</th>
            <th className="border-r w-1/6 text-white">Payment</th>
            <th className="border-r w-1/6 text-white">Price</th>
            <th className="border-r w-1/6 text-white">Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((item) => (
            <tr key={item?._id}>
              <td className="hover:text-brand cursor-pointer">
                #Order-{item?.orderId}
              </td>
              <td>
                {item?.items.map((oitems) => (
                  <p key={oitems._id}>{oitems?.product.name}</p>
                ))}
              </td>
              <td>{item?.user.fullName}</td>
              <td>Bank</td>
              <td>{item?.totalAmount} $</td>
              <td>{item?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default OrderList;
