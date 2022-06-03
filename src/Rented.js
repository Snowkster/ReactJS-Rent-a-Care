import React from "react";

const Rented = ({ rented }) => {
  return (
    <div className="section-center">
      {rented.map((rent) => {
        const { id, start, end, vehicle, customer } = rent;

        return (
          <article key={id} className="item">
            <img
              src={vehicle.img}
              alt={vehicle.brand + " " + vehicle.model}
              className="photo"
            ></img>
            <div className="item-info">
              <header>
                <h4>{vehicle.brand + " " + vehicle.model}</h4>
                <h4 className="price">${vehicle.price}</h4>
              </header>
              <div className="item-text">
                {start}
                <br />
                {end}
                <br />
                {customer.name}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Rented;
