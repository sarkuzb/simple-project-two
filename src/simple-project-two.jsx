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

  return (
    <div>
      <p>
        Your Fav Car Is: {car.year} {car.make} {car.model}
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
  );
}

export default SimpleTwo;
