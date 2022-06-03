import React from "react";

const Vehicle = ({ id, brand, model, year, fuel, img, price }) => {
  return (
    <article className="item">
      <img src={img} alt={brand + " " + model} className="photo"></img>
      <div className="item-info">
        <header>
          <h4>{brand + " " + model}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <div className="item-text">
          {year}
          <br />
          {fuel}
        </div>
      </div>
    </article>
  );
};
export default Vehicle;
