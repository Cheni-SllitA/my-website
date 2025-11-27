import React from "react";
import { Link } from "react-scroll";

export default function Navbar({ darkMode, setDarkMode, sections }) {
  return (
    <nav className="fixed w-full z-50 bg-white/60 dark:bg-black/30 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-500">
          Chenitha Nethvin
        </h1>

        <div className="hidden md:flex items-center space-x-6 text-sm uppercase font-medium">
          {sections.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={600}
              className="hover:text-cyan-500 cursor-pointer transition-colors"
            >
              {item}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          ></button>
        </div>
      </div>
    </nav>
  );
}
