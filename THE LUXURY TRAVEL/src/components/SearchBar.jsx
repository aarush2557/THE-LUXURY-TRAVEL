export default function SearchBar({ setSearch }) {
  return (
    <input
      placeholder="Search destinations..."
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        width: "100%",
        marginBottom: "20px",
        borderRadius: "10px",
        border: "none",
      }}
    />
  );
}