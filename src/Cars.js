import React from "react";
import Vehicle from "./Vehicle";

const Cars = ({ cars }) => {
  return (
    <div className="section-center">
      {cars.map((car) => {
        return <Vehicle key={car.id} {...car}></Vehicle>; // (...) access to all properties in object
      })}
    </div>
  );
};

export default Cars;
