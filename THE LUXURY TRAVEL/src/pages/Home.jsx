import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">

      <div className="overlay">

        <h1>Explore Luxury Destinations</h1>

        <p>
          Discover beautiful places around the world with premium experiences.
        </p>

        <Link to="/explore">
          <button>Explore Now</button>
        </Link>

      </div>

    </div>
  );
}