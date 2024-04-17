import { useEffect, useState } from "react";
import Heading from "../Heading";
import { useSelector } from "react-redux";
import { InvoiceData } from "../../api";
import { FaUserSecret } from "react-icons/fa";
import Loading from "../Loading";
import { TbListDetails } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
const InvoiceList = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [looding, setLooding] = useState(true);
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    InvoiceData(user?.auth)
      .then((res) => {
        setInvoices(res.data.invoice);
        setLooding(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (looding) {
    return <Loading />;
  }
  console.log(invoices[0]);
  return (
    <section className="mt-28 md:mt-0 md:p-10 w-full productlist">
      <Heading title="Invoice List" />
      <table className="w-full">
        <thead className="py-4 bg-secondary">
          <tr>
            <th className="border-r text-white">ID</th>
            <th className="border-r text-white">Customer</th>
            <th className="border-r text-white">Product</th>
            <th className="border-r text-white">
              Total Amount with (0.05%)Tax
            </th>
            <th className="border-r text-white">Date</th>
            <th className="border-r text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((item) => (
            <tr key={item?._id}>
              <td>#{item?.customer?.invoiceId}</td>
              <td className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-brand flex justify-center items-center text-brand text-2xl">
                  <FaUserSecret />
                </div>
                <div className="text-start">
                  <p>{item?.customer?.name}</p>
                  <p className="text-sm text-slate-500">
                    Phone: {item?.customer?.phone}
                  </p>
                </div>
              </td>
              <td>
                <ul>
                  {item?.items.map((pitem, i) => (
                    <li key={i}>
                      <p className="text-sm">
                        {i + 1}. {pitem.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </td>
              <td>{item?.totals?.total} $</td>
              <td>{item.date.slice(0, 10)}</td>
              <td className="flex items-center justify-evenly">
                <button className="detail_btn">
                  <TbListDetails className="detail_icon" />
                </button>
                <button className="delete_btn">
                  <AiFillDelete className="blt_icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default InvoiceList;
