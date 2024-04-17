import { useState } from "react";

const InvoiceItems = ({ invoiceData, onAddItem, onDeleteItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    unitCost: "",
    quantity: "",
  });

  const handleNewItemChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSubmitNewItem = (event) => {
    event.preventDefault();
    if (!newItem.name) {
      console.log("Name required");
    } else if (!newItem.quantity) {
      console.log("Quantity required");
    } else if (!newItem.unitCost) {
      console.log("UnitCost required");
    } else {
      onAddItem(newItem);
    }
  };

  return (
    <div className="border p-5 rounded-lg productlist">
      <table className="w-full">
        <thead className="bg-slate-300">
          <tr>
            <th>Items</th>
            <th>Details</th>
            <th>Unit Cost</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td className="relative">
                <button
                  onClick={() => onDeleteItem(index)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-red-600 text-lg close"
                >
                  X
                </button>
                {item.name}
              </td>
              <td>{item.description}</td>
              <td>{item.unitCost}</td>
              <td>{item.quantity}</td>
              <td>{(item.unitCost * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmitNewItem} className="pt-10 basic invoiceInput">
        <div className="flex gap-3 mb-1">
          <label htmlFor="newItemName">Name:</label>
          <input
            type="text"
            id="newItemName"
            name="name"
            required
            value={newItem.name}
            onChange={handleNewItemChange}
          />
        </div>
        <div className="flex gap-3 mb-1">
          <label htmlFor="newItemDescription">Details:</label>
          <input
            type="text"
            id="newItemDescription"
            name="description"
            value={newItem.description}
            onChange={handleNewItemChange}
          />
        </div>
        <div className="flex gap-3 mb-1">
          <label htmlFor="newItemUnitCost">Unit Cost:</label>
          <input
            required
            type="number"
            id="newItemUnitCost"
            name="unitCost"
            value={newItem.unitCost}
            onChange={handleNewItemChange}
          />
        </div>
        <div className="flex gap-3 mb-1">
          <label htmlFor="newItemQuantity">Quantity:</label>
          <input
            required
            type="number"
            id="newItemQuantity"
            name="quantity"
            value={newItem.quantity}
            onChange={handleNewItemChange}
          />
        </div>
        <button type="submit" className="text-brand">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default InvoiceItems;
