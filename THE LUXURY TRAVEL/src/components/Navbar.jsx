import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: dark ? "#111" : "#eee",
        color: dark ? "white" : "black",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
      </div>

      <button onClick={toggleTheme}>
        {dark ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}