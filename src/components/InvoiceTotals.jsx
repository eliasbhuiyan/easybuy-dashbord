import { useState } from "react";

const InvoiceTotals = ({ invoiceData }) => {
    const [amountPaid, setAmountPaid] = useState(0);
    const subTotal = invoiceData.items.reduce((total, item) => total + (item.unitCost * item.quantity), 0);
    const tax = 0.05 * subTotal; // Replace with your tax rate calculation logic (can be a function)
    const total = subTotal + tax;
    const handleAmountPaidChange = (event) => {
        setAmountPaid(parseFloat(event.target.value));
    };
    const balanceDue = total - amountPaid;
    return (
        <div className="border py--5 rounded-lg flex flex-col items-end">
            <div className="border-b border-l pr-3 basic text-end w-1/2">
                <span className="border-r p-2 inline-block pr-6">Subtotal:</span>
                <span className=" w-1/4 text-center inline-block">{subTotal.toFixed(2)}</span>
            </div>
            <div className="border-b border-l pr-3 basic text-end w-1/2">
                <span className="border-r p-2 inline-block pr-6">Tax 0.05%</span>
                <span className=" w-1/4 text-center inline-block">{tax.toFixed(2)}</span>
            </div>
            <div className="border-b border-l pr-3 basic text-end w-1/2">
                <span className="border-r p-2 inline-block pr-6">Total:</span>
                <span className=" w-1/4 text-center inline-block">{total.toFixed(2)}</span>
            </div>
            <div className="border-b border-l pr-3 basic text-end w-1/2">
                <label htmlFor="amountPaid" className="border-r p-2 inline-block pr-6">Amount Paid:</label>
                <input className=" w-1/4 text-center inline-block" type="number" id="amountPaid" value={amountPaid} onChange={handleAmountPaidChange} />
            </div>
            <div className="border-b border-l pr-3 basic text-end w-1/2">
                <span className="border-r p-2 inline-block pr-6">Balance Due:</span>
                <span className=" w-1/4 text-center inline-block">{balanceDue.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default InvoiceTotals;