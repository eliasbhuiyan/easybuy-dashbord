import { useState } from "react";
import InvoiceTotals from "../InvoiceTotals";
import jsPDF from "jspdf";
import InvoiceDetails from "../InvoiceDetails";
import InvoiceItems from "../InvoiceItems";

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    date: new Date().toLocaleDateString(),
    customer: {
      invoiceId: "00123",
      name: "",
      address: "",
      email: "",
    },
    items: [],
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
    console.log(invoiceData);
  };

  const handleAddItem = (newItem) => {
    console.log(newItem);
    setInvoiceData((prevData) => ({
      ...prevData,
      items: [...prevData.items, newItem],
    }));
    console.log(invoiceData);
  };

  const handleDeleteItem = (index) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      items: prevData.items.filter((_, i) => i !== index),
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
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
        <InvoiceTotals invoiceData={invoiceData} />
        <button onClick={generatePDF} className="print btn w-fit m-auto">
          Print PDF
        </button>
      </div>
    </div>
  );
};

export default Invoice;
