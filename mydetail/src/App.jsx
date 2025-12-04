import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Profile from "./components/Profile";
import EditForm from "./components/EditForm";

export default function App() {
  const [details, setDetails] = useState({
    name: "Deva",
    degree: "B.Tech IT",
    age: 20,
    tech: ["React", "JavaScript"]
  });

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About details={details} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<EditForm details={details} setDetails={setDetails} />} />
      </Routes>
    </div>
  );
}
