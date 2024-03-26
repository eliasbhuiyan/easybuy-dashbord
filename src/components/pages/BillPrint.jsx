import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const CustomerBillingPage = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [paidAmount, setPaidAmount] = useState(0);

  const addProduct = () => {
    if (productName && productPrice && quantity > 0) {
      const newProduct = {
        name: productName,
        price: parseFloat(productPrice),
        quantity: parseInt(quantity),
      };
      setProducts([...products, newProduct]);
      setProductName('');
      setProductPrice('');
      setQuantity(1);
    }
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const calculateDueAmount = () => {
    return calculateTotalPrice() - paidAmount;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Customer Billing', 10, 10);
    let yPos = 20;
    products.forEach((product) => {
      doc.text(`${product.name} - $${product.price.toFixed(2)} x ${product.quantity}`, 10, yPos);
      yPos += 10;
    });
    doc.text(`Total Price: $${calculateTotalPrice().toFixed(2)}`, 10, yPos + 10);
    doc.text(`Paid Amount: $${paidAmount.toFixed(2)}`, 10, yPos + 20);
    doc.text(`Due Amount: $${calculateDueAmount().toFixed(2)}`, 10, yPos + 30);
    doc.save('billing.pdf');
  };

  return (
    <div className="container">
      <h2>Customer Billing</h2>
      <div className="input-container">
        <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
        <input type="number" placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="product-list">
        <h3>Product List</h3>
        {products.map((product, index) => (
          <div className="product" key={index}>
            <p>{product.name} - ${product.price.toFixed(2)} x {product.quantity}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
        <input type="number" placeholder="Paid Amount" value={paidAmount} onChange={(e) => setPaidAmount(parseFloat(e.target.value))} />
        <h3>Due Amount: ${calculateDueAmount().toFixed(2)}</h3>
      </div>
      <div className="button-container">
        <button onClick={handlePrint}>Print</button>
        <button onClick={handleDownloadPDF}>Download PDF</button>
      </div>
    </div>
  );
};

export default CustomerBillingPage;
