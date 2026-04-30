import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Explore() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces([
      {
        id: 1,
        name: "Paris",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      },
      {
        id: 2,
        name: "Dubai",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      },
      {
        id: 3,
        name: "Bali",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
    ]);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Explore Destinations</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {places.map((place) => (
          <Card key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}