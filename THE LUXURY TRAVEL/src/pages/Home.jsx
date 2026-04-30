import Card from "../components/Card";

export default function Home() {
  const data = [
    {
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Luxury Travel</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {data.map((item, i) => (
          <Card key={i} data={item} />
        ))}
      </div>
    </div>
  );
}