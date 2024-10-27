import React, { useState } from "react";

function SimpleTwo() {
  const [car, setCar] = useState({
    year: "",
    make: "",
    model: "",
  });

  function onchangeYear(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function onchangeMake(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function onchangeModel(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  const [input, setInput] = useState();

  function onchangeInput(event) {
    setInput(event.target.value);
  }

  const [payment, setYourPaymentMethod] = useState();

  function onchangePayment(event) {
    setYourPaymentMethod(event.target.value);
  }

  return (
    <div>
      <div className="container">
        <p>
          Your Fav Car Is:{" "}
          <span className="your-fav-car">
            {car.year} {car.make} {car.model}
          </span>
        </p>
        <input type="number" onChange={onchangeYear} placeholder="2024" />
        <br />
        <input
          type="text"
          value={car.make}
          onChange={onchangeMake}
          placeholder="Made By?"
        />
        <br />
        <input
          type="text"
          value={car.model}
          onChange={onchangeModel}
          placeholder="What Model?"
        />
      </div>

      <div className="container">
        <select value={input} onChange={onchangeInput} name="" id="">
          <option value="">Select Your Year</option>
          <option value="Foundation Year">Foundation Year</option>
          <option value="First Year">First Year</option>
          <option value="Second Year">Second Year</option>
          <option value="Third Year">Third Year</option>
        </select>

        <p>
          Your Current Year: <span className="input-span">{input}</span>
        </p>
      </div>

      <div className="container">
        <p>Payment Method:</p>
        <input
          type="radio"
          value="Visa"
          checked={payment === "Visa"}
          onChange={onchangePayment}
        />
        Visa
        <br />
        <input
          type="radio"
          value="Mastercard"
          checked={payment === "Mastercard"}
          onChange={onchangePayment}
        />
        Mastercard
        <br />
        <input
          type="radio"
          value="Uzcard"
          checked={payment === "Uzcard"}
          onChange={onchangePayment}
        />
        Uzcard
        <br />
        <input
          type="radio"
          value="HUMO"
          checked={payment === "HUMO"}
          onChange={onchangePayment}
        />
        HUMO
        <p>
          Your Payment Method: <span className="payment">{payment}</span>
        </p>
      </div>
    </div>
  );
}

export default SimpleTwo;
