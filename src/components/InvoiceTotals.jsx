import { useEffect, useState } from "react";

const InvoiceTotals = ({ invoiceData, onPaidAmount }) => {
  const [amountPaid, setAmountPaid] = useState(0);
  const subTotal = invoiceData.items.reduce(
    (total, item) => total + item.unitCost * item.quantity,
    0
  );
  const tax = 0.05 * subTotal; // Replace with your tax rate calculation logic (can be a function)
  const total = subTotal + tax;
  const handleAmountPaidChange = (event) => {
    setAmountPaid(parseFloat(event.target.value));
  };
  const balanceDue = total - amountPaid;
  useEffect(() => {
    onPaidAmount({
      total: total,
      paid: amountPaid,
      balanceDue: isNaN(balanceDue) ? total : balanceDue < 0 ? 0 : balanceDue,
      returnAmount: balanceDue < 0 ? amountPaid - total : 0,
    });
  }, [amountPaid, total]);
  return (
    <div className="border py--5 rounded-lg flex justify-between">
      <div className="w-1/2 flex justify-center items-center">
        {balanceDue < 1 && (
          <div className="w-1/3">
            <img className="w-full" src="/paid.png" alt="" />
          </div>
        )}
      </div>
      <div className="w-1/2">
        <div className="border-b border-l pr-3 basic text-end">
          <span className="border-r p-2 inline-block pr-6">Subtotal:</span>
          <span className=" w-1/4 text-center inline-block">
            {subTotal.toFixed(2)}
          </span>
        </div>
        <div className="border-b border-l pr-3 basic text-end">
          <span className="border-r p-2 inline-block pr-6">Tax 0.05%</span>
          <span className=" w-1/4 text-center inline-block">
            {tax.toFixed(2)}
          </span>
        </div>
        <div className="border-b border-l pr-3 basic text-end">
          <span className="border-r p-2 inline-block pr-6">Total:</span>
          <span className=" w-1/4 text-center inline-block">
            {total.toFixed(2)}
          </span>
        </div>
        <div className="border-b border-l pr-3 basic text-end">
          <label
            htmlFor="amountPaid"
            className="border-r p-2 inline-block pr-6"
          >
            Amount Paid:
          </label>
          <input
            className=" w-1/4 text-center inline-block"
            type="number"
            id="amountPaid"
            value={amountPaid}
            onChange={handleAmountPaidChange}
          />
        </div>
        <div className="border-b border-l pr-3 basic text-end">
          <span className="border-r p-2 inline-block pr-6">Balance Due:</span>
          <span className=" w-1/4 text-center inline-block">
            {isNaN(balanceDue)
              ? total.toFixed(2)
              : balanceDue < 0
              ? (0).toFixed(2)
              : balanceDue.toFixed(2)}
          </span>
        </div>
        <div className="border-b border-l pr-3 basic text-end">
          <span className="border-r p-2 inline-block pr-6">Return Amount:</span>
          <span className=" w-1/4 text-center inline-block">
            {balanceDue < 0 ? (amountPaid - total).toFixed(2) : (0).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTotals;
