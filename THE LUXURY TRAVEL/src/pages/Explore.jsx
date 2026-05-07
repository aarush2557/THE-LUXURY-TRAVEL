import { useState } from "react";
import Card from "../components/Card";

export default function Explore() {

  const destinations = [
    {
      name: "Paris",
      image: "https://picsum.photos/600/400?1",
      description: "Romantic city with luxury lifestyle."
    },
    {
      name: "Dubai",
      image: "https://picsum.photos/600/400?2",
      description: "Modern architecture and desert adventures."
    },
    {
      name: "Bali",
      image: "https://picsum.photos/600/400?3",
      description: "Beautiful beaches and tropical vibes."
    },
    {
      name: "Maldives",
      image: "https://picsum.photos/600/400?4",
      description: "Luxury resorts with ocean views."
    },
    {
      name: "Switzerland",
      image: "https://picsum.photos/600/400?5",
      description: "Snow mountains and premium travel."
    },
    {
      name: "Tokyo",
      image: "https://picsum.photos/600/400?6",
      description: "Modern technology and culture."
    }
  ];

  const [search, setSearch] = useState("");

  const filtered = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="explore">

      <h1>Explore Destinations</h1>

      <input
        type="text"
        placeholder="Search destinations..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>

    </div>
  );
}