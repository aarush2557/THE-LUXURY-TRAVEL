import { useState, useEffect } from "react";

export default function Card({ data }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("fav")) || [];
    setFav(saved.includes(data.name));
  }, [data.name]);

  const toggleFav = () => {
    let saved = JSON.parse(localStorage.getItem("fav")) || [];

    if (fav) {
      saved = saved.filter((item) => item !== data.name);
    } else {
      saved.push(data.name);
    }

    localStorage.setItem("fav", JSON.stringify(saved));
    setFav(!fav);
  };

  return (
    <div
      style={{
        background: "#1e2a44",
        borderRadius: "15px",
        padding: "10px",
        position: "relative",
      }}
    >
      <img
        src={data.image}
        alt={data.name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />

      <h2>{data.name}</h2>

      <button
        onClick={toggleFav}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "white",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        {fav ? "❤️" : "🤍"}
      </button>
    </div>
  );
}