import { useEffect, useState } from "react";
import Heading from "../Heading";
import { useSelector } from "react-redux";
import { InvoiceData } from "../../api";
import { FaUserSecret } from "react-icons/fa";
import Loading from "../Loading";
import { TbListDetails } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import Popup from "../Popup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const InvoiceList = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [deletePopup, setDeletePopup] = useState(false);
  const [realtime, setRealtime] = useState(false);
  const [invoiceId, setInvoiceId] = useState("");
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
  }, [realtime]);

  const handelDelete = (data) => {
    setDeletePopup(data);
    if (data) {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}product/invoicedelete`,
          {
            invoiceId: invoiceId,
          },
          {
            headers: {
              Authorization: `Bearer user@${user?.auth}@${
                import.meta.env.VITE_SWTSECRT
              }`,
            },
          }
        )
        .then((res) => {
          toast.info(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setDeletePopup(false);
          setRealtime(!realtime);
        })
        .catch((err) => {
          toast.error(err.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
        });
    }
  };

  if (looding) {
    return <Loading />;
  }
  return (
    <section className="mt-28 md:mt-0 md:p-10 w-full productlist">
      <ToastContainer />
      <Heading title="Invoice List" />
      {deletePopup && <Popup sendData={handelDelete} />}
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
            <th className="border-r text-white w-40">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.length > 0 ? (
            invoices.map((item) => (
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
                <td className="flex items-center justify-evenly w-40">
                  <button className="detail_btn">
                    <TbListDetails className="detail_icon" />
                  </button>
                  <button
                    onClick={() => {
                      setDeletePopup(true);
                      setInvoiceId(item._id);
                    }}
                    className="delete_btn"
                  >
                    <AiFillDelete className="blt_icon" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="absolute bottom-1/2 left-1/2">
                No Invoice Available..
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default InvoiceList;
