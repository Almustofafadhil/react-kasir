import React, { useState, useEffect, useRef } from "react";
import BE from "../../assets/BE.png";
import { Link } from "react-router-dom";

function MainNavbar() {
  const [open, setOpen] = useState(false);
  const menus = [
    { text: "Profile", link: "/login" }, // Contoh penggunaan tautan React Router
    { text: "Keranjang", link: "/pelatihan" },
    { text: "Histori", link: "/setting" },
    { text: "Logout", link: "/logout" },
  ];
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="flex items-center">
          <a
            href="#"
            className="text-blue-500 ml-2 rounded-[100px] px-10 py-1  bg-white font-semibold text-lg"
          >
            TOKOKU
          </a>

          <div className="flex-grow ml-[10%]">
            <input
              type="text"
              className="border rounded-md px-4 py-2 w-[29rem] focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Cari pelatihan..."
            />
          </div>

          <div className="text-white text-[16px]">
            <a href="">Home</a>
            <a href="" className="ml-5">
              Contact
            </a>
            <a href="" className="ml-5">
              About
            </a>

          </div>

          <span className="ml-[9%] text-5xl">
            <div className="flex justify-center">
              <div className="relative" onClick={toggleDropdown}>
                <img
                  src={BE}
                  className="w-[3rem] h-[7.5vh] rounded-full cursor-pointer"
                />

                {open && (
                  <div
                    className="bg-white p-3 w-[9rem] shadow-lg absolute -left-[140px]"
                    ref={dropdownRef}
                  >
                    <ul>
                      {menus.map((menu) => (
                        <li
                          className="p-2 text-[15px] cursor-pointer rounded hover:bg-blue-100"
                          key={menu.text}
                        >
                          <Link to={menu.link}>{menu.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </span>

        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
