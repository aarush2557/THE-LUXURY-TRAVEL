import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Booking() {

  const location = useLocation();

  const data = location.state;

  const [date, setDate] = useState("");

  return (
    <div className="booking-page">

      <div className="booking-card">

        <img src={data.image} alt={data.name} />

        <h1>{data.name}</h1>

        <p>{data.description}</p>

        <h3>Price: ₹99,999</h3>

        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          onClick={() =>
            alert(
              `Payment Successful ✈️\nTrip booked for ${date}`
            )
          }
        >
          Proceed To Payment
        </button>

      </div>

    </div>
  );
}