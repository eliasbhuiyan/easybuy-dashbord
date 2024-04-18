import { useState } from "react";
import InvoiceTotals from "../InvoiceTotals";
import InvoiceDetails from "../InvoiceDetails";
import InvoiceItems from "../InvoiceItems";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const Invoice = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [invoiceData, setInvoiceData] = useState({
    date: new Date().toLocaleDateString(),
    customer: {
      invoiceId: `eb${Math.floor(1000 + Math.random() * 9000)}`,
      name: "",
      address: "",
      phone: "",
    },
    items: [],
    totals: {},
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      customer: {
        ...prevData.customer,
        [name]: value,
      },
    }));
  };

  const handleAddItem = (newItem) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      items: [...prevData.items, newItem],
    }));
  };
  const handelAmountMargin = (amount) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      totals: {
        total: amount.total,
        paid: amount.paid,
        balanceDue: amount.balanceDue,
        returnAmount: amount.returnAmount,
      },
    }));
  };

  const handleDeleteItem = (index) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      items: prevData.items.filter((_, i) => i !== index),
    }));
  };
  const handelPrint = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}product/createinvoice`,
        {
          invoiceData,
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
        window.print();
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setInvoiceData({
          date: new Date().toLocaleDateString(),
          customer: {
            invoiceId: `eb${Math.floor(1000 + Math.random() * 9000)}`,
            name: "",
            address: "",
            phone: "",
          },
          items: [],
          totals: {},
        });
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      });
  };

  return (
    <div className="bg-[#F5F5F5] w-full p-10">
      <ToastContainer />
      <div className="productBox flex flex-col gap-10 invoice-container">
        <InvoiceDetails
          invoiceData={invoiceData}
          onInputChange={handleInputChange}
        />
        <InvoiceItems
          invoiceData={invoiceData}
          onAddItem={handleAddItem}
          onDeleteItem={handleDeleteItem}
        />
        <InvoiceTotals
          invoiceData={invoiceData}
          onPaidAmount={handelAmountMargin}
        />
        <button onClick={handelPrint} className="print btn w-fit m-auto">
          Print PDF
        </button>
      </div>
    </div>
  );
};

export default Invoice;
