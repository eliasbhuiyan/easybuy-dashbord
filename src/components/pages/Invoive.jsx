import { useRef, useState } from "react";
import InvoiceTotals from "../InvoiceTotals";
import InvoiceDetails from "../InvoiceDetails";
import InvoiceItems from "../InvoiceItems";

const Invoice = () => {
  const buttonRef = useRef(null);
  const [invoiceData, setInvoiceData] = useState({
    date: new Date().toLocaleDateString(),
    customer: {
      invoiceId: "00123",
      name: "",
      address: "",
      email: "",
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
    window.print();
  };

  return (
    <div className="bg-[#F5F5F5] w-full p-10">
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
        {/* <button
          onClick={handelPrint}
          onKeyDown={handleKeyPress}
          className="print btn w-fit m-auto"
        >
          Print PDF
        </button> */}
        <button
          autoFocus
          onClick={handelPrint}
          className="print btn w-fit m-auto"
        >
          Print PDF
        </button>
      </div>
    </div>
  );
};

export default Invoice;
