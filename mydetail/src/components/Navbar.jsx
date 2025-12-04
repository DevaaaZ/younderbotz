import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/edit">Edit</Link>
    </div>
  );
}
