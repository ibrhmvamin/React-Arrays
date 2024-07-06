import React, { useState } from "react";
import "./Form.css";
import Car from "./Car.js";
export default function Form() {
  const [cars, setCars] = useState([
    {
      id: 1,
      model: "BMW",
      vendor: "M5",
      price: 100000,
      imageURL:
        "https://turbo.azstatic.com/uploads/f660x496/2024%2F05%2F24%2F10%2F09%2F02%2F687f71e7-db1c-4282-90f7-065620ca19b5%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg",
    },
    {
      id: 2,
      model: "Tesla",
      vendor: "Model S",
      price: 80000,
      imageURL:
        "https://turbo.azstatic.com/uploads/f660x496/2024%2F04%2F10%2F10%2F29%2F23%2F34d2ec6f-77e5-401d-aa54-99c3e7042d1a%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg",
    },
    {
      id: 3,
      model: "Toyota",
      vendor: "Corolla",
      price: 25000,
      imageURL:
        "https://turbo.azstatic.com/uploads/f660x496/2024%2F04%2F02%2F16%2F02%2F22%2Fa4188af4-d1fe-492b-8ca2-aa87cd721074%2F14231_J-_dQLKSND7AOyYEFIDxaw.jpg",
    },
    {
      id: 4,
      model: "Honda",
      vendor: "Civic",
      price: 23000,
      imageURL:
        "https://turbo.azstatic.com/uploads/f660x496/2024%2F06%2F27%2F17%2F29%2F05%2F3176440f-4b2a-4a9c-a150-6f5579fb96f4%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg",
    },
  ]);

  const [formState, setFormState] = useState({
    model: "",
    vendor: "",
    price: "",
    imageURL: "",
  });

  function handleModelChange(e) {
    setFormState({
      ...formState,
      model: e.target.value,
    });
  }

  function handleVendorChange(e) {
    setFormState({
      ...formState,
      vendor: e.target.value,
    });
  }

  function handlePriceChange(e) {
    setFormState({
      ...formState,
      price: e.target.value,
    });
  }

  function handleImageURLChange(e) {
    setFormState({
      ...formState,
      imageURL: e.target.value,
    });
  }

  function handleAddClick(e) {
    e.preventDefault();
    setCars([
      ...cars,
      {
        id: cars.length + 1,
        model: formState.model,
        vendor: formState.vendor,
        price: formState.price,
        imageURL: formState.imageURL,
      },
    ]);
    setFormState({
      model: "",
      vendor: "",
      price: "",
      imageURL: "",
    });
  }

  function handleAddtoFormClick(car) {
    setFormState({
      id: car.id,
      model: car.model,
      vendor: car.vendor,
      price: car.price,
      imageURL: car.imageURL,
    });
  }

  function handleUpdateClick(e) {
    e.preventDefault();
    const updatedCars = cars.map((car) => {
      if (formState.id == car.id) {
        return {
          id: car.id,
          model: formState.model,
          vendor: formState.vendor,
          price: formState.price,
          imageURL: formState.imageURL,
        };
      }
      return car;
    });
    setCars(updatedCars);
    setFormState({
      model: "",
      vendor: "",
      price: "",
      imageURL: "",
    });
  }

  return (
    <div className="carList">
      <section>
        <ul>
          {cars.map((car) => (
            <Car
              onClick={() => {
                handleAddtoFormClick(car);
              }}
              key={car.id}
              car={car}
            ></Car>
          ))}
        </ul>
      </section>
      <form>
        <label>
          Model : <input value={formState.model} onChange={handleModelChange} />
        </label>
        <br />
        <label>
          Vendor :{" "}
          <input value={formState.vendor} onChange={handleVendorChange} />
        </label>
        <br />
        <label>
          Price :{" "}
          <input
            type="number"
            value={formState.price}
            onChange={handlePriceChange}
          />
        </label>
        <br />
        <label>
          URL :{" "}
          <input
            type="url"
            value={formState.imageURL}
            onChange={handleImageURLChange}
          />
        </label>
        <br />
        <div className="buttons">
          <button onClick={handleAddClick}>Add</button>
          <button onClick={handleUpdateClick}>Update</button>
        </div>
      </form>
    </div>
  );
}
