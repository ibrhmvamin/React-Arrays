import React from "react";

export default function Car({ car, onClick }) {
  return (
    <>
      <li onClick={onClick} key={car.id}>
        <h3>Model : {car.model}</h3>
        <p> Vendor : {car.vendor}</p>
        <p>Price : {car.price}</p>
        <img src={car.imageURL} alt={car.model} />
      </li>
    </>
  );
}
