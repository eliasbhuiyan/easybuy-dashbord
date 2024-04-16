const InvoiceDetails = ({ invoiceData, onInputChange }) => {
  return (
    <div className="invoice-details border p-5 rounded-lg">
      <h2 className="title border-b pb-4">Invoice</h2>
      <div className="flex justify-between px-10">
        <div>
          <div className="basic">
            <label htmlFor="invoiceId">Invoice ID:</label>
            <input
              type="text"
              id="invoiceId"
              name="invoiceId"
              value={invoiceData.customer.invoiceId}
              onChange={onInputChange}
            />
          </div>
          <div className="basic pb-3">
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              id="date"
              name="date"
              value={invoiceData.date}
              disabled
            />
          </div>
          <div className="basic">
            <h3 className="pb-2">Customer</h3>
            <label htmlFor="customerName">Name:</label>
            <input
              type="text"
              id="customerName"
              name="name"
              //   value={invoiceData.customer.name}
              onChange={onInputChange}
            />
          </div>
          <div className="basic">
            <label htmlFor="customerAddress">Address:</label>
            <input
              type="text"
              id="customerAddress"
              name="address"
              //   value={invoiceData.customer.address}
              onChange={onInputChange}
            />
          </div>
          <div className="basic">
            <label htmlFor="customerEmail">Email:</label>
            <input
              type="email"
              id="customerEmail"
              name="email"
              //   value={invoiceData.customer.email}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="w-36 logo">
          <div>
            <img src="/logo.png" className="w-full" alt="logo" />
          </div>
          <div>
            <p>Dhaka, Bangladesh 1230</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
