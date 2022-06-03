import React, { useState, useEffect } from "react";
import "./App.css";
import Cars from "./Cars";
import Customers from "./Customers";
import Rented from "./Rented";
import dbJson from "./db.json";
import axios from "axios";

function App() {
  const [page, setPage] = useState("");
  const [display, setDisplay] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetchItems();
    console.log("test effect");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const vehicle = {
      brand: e.target.brand.value,
      model: e.target.model.value,
      year: e.target.year.value,
      fuel: e.target.fuel.value,
      img: e.target.img.value,
      price: e.target.price.value,
    };

    axios.post("http://localhost:3005/vehicles", vehicle);
  };

  const fetchItems = async () => {
    try {
      if (page === "") {
        console.log("test fetch");
        const response = await fetch("http://localhost:3005/vehicles");
        const items = await response.json();
        setDisplay(items);
        return;
      }
      if (page === "vehicles") {
        console.log("test fetch");
        const response = await fetch("http://localhost:3005/vehicles");
        const items = await response.json();
        setDisplay(items);
        return;
      }
      if (page === "customers") {
        console.log("test fetch");
        const response = await fetch("http://localhost:3005/customers");
        const items = await response.json();
        setDisplay(items);
        return;
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    pickYears();
    console.log("test effect 2");
  }, []);

  const pickYears = () => {
    const year = [];
    for (let i = 2000; i <= new Date().getFullYear(); i++) {
      year.push(i);
    }
    setYears(year);
    console.log(year);
  };

  return (
    <main>
      <section className="showroom section">
        <div className="title">
          <h2>Rent a car</h2>
          <div className="underline"></div>
          <button className="btn-filter" onClick={() => setPage("vehicles")}>
            Rent a car
          </button>
          <button className="btn-filter" onClick={() => setPage("customers")}>
            Customers
          </button>
          {/* <button className="btn-filter" onClick={() => fetchItems("rentals")}>
            Rented cars
          </button>  */}
        </div>

        {page === "vehicles" && <Cars cars={display}></Cars>}
        {page === "customers" && <Customers customers={display}></Customers>}
        {/* {view === "rentals" && <Rented rented={display}></Rented>}  */}
      </section>
      {page === "vehicles" && (
        <section className="showroom section">
          <div className="title">
            <form onSubmit={handleSubmit}>
              <h4>Add Vehicle</h4>
              <label htmlFor="brand">Brand</label>
              <input type="text" name="brand" id="brand" />
              <label htmlFor="model">Model</label>
              <input type="text" name="model" id="model" />
              <select name="year">
                {years.map((opt) => (
                  <option>{opt}</option>
                ))}
              </select>
              <select name="fuel">
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
                <option value="hybrid">Hybrid</option>
                <option value="electric">Electric</option>
              </select>
              <label htmlFor="img">Image</label>
              <input type="text" name="img" />
              <label htmlFor="price">Price/day</label>
              <input type="text" name="price" />
              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
