import React from "react";
import Customer from "./Customer";

const Customers = ({ customers }) => {
  return (
    <div className="section-center">
      {customers.map((customer) => {
        return <Customer key={customer.id} {...customer}></Customer>; // (...) access to all properties in object
      })}
    </div>
  );
};

export default Customers;
