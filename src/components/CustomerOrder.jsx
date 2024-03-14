import React from "react";

const CustomerOrder = () => {
  return (
    <div className="w-1/2 productBox productlist">
      <h2 className="title border-b pb-5">Customer Orders</h2>
      <table className="w-full">
        <thead className="py-4 bg-secondary">
          <tr>
            <th className="border-r text-white">P.ID</th>
            <th className="border-r text-white">Item</th>
            <th className="border-r text-white">Payment</th>
            <th className="border-r text-white">Order Date</th>
            <th className="border-r text-white">Price</th>
          </tr>
        </thead>
        <tbody className="overflow-scroll">
          <tr>
            <td>#5460</td>
            <td>Watch</td>
            <td>Bank</td>
            <td>March 16, 2021</td>
            <td>620 tk</td>
          </tr>
          <tr>
            <td>#5460</td>
            <td>Watch</td>
            <td>Card</td>
            <td>March 16, 2021</td>
            <td>620 tk</td>
          </tr>
          <tr>
            <td>#5460</td>
            <td>Watch</td>
            <td>Cash On</td>
            <td>March 16, 2021</td>
            <td>620 tk</td>
          </tr>
          <tr>
            <td>#5460</td>
            <td>Watch</td>
            <td>Nagad</td>
            <td>March 16, 2021</td>
            <td>620 tk</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOrder;
