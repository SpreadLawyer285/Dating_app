import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-48 z-50 bg-gray-900 text-white flex flex-col items-center pt-10 gap-6 shadow-xl transition-transform duration-300
      ${open ? "translate-x-0" : "translate-x-40"}`}
    >
      {/* Toggle fül */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute left-[-40px] top-10 w-10 h-16 bg-gray-800 rounded-l-lg flex items-center justify-center hover:bg-gray-700"
      >
        ☰
      </button>

      <h1 className="text-xl font-bold mb-6">Menu</h1>

      <Link
        to="/profile"
        className="w-32 text-center bg-gray-700 hover:bg-gray-600 py-3 rounded-lg transition"
      >
        Profile
      </Link>
    </div>
  );
};

export default Navbar;
