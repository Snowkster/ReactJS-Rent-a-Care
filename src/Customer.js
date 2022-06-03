import React from "react";

const Customer = ({ id, name, email, phone }) => {
  return (
    <article className="item">
      <div className="item-info">
        <header>
          <h4>{name + " " + email}</h4>
          <h4 className="price">{phone}</h4>
        </header>
        <div className="item-text">
          <br />
        </div>
      </div>
    </article>
  );
};
export default Customer;
