import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Card({ data }) {

  const navigate = useNavigate();

  const [fav, setFav] = useState(false);

  return (
    <div className="card">

      <img src={data.image} alt={data.name} />

      <div className="card-content">

        <div className="top-row">
          <h2>{data.name}</h2>

          <span
            className="heart"
            onClick={() => setFav(!fav)}
          >
            {fav ? "❤️" : "🤍"}
          </span>
        </div>

        <p>{data.description}</p>

        <h4>⭐ 4.9 Rating</h4>

        <button
          onClick={() =>
            navigate("/booking", {
              state: data
            })
          }
        >
          Book Now
        </button>

      </div>

    </div>
  );
}