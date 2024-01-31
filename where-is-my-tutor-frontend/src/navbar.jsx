import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import Welcomepage from "./screens/welcomepage";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10"
          onClick={closeSidebar}
        ></div>
      )}

      <nav
        className={`bg-white p-4 lg:mx-32 xl:mx-60 relative z-10 ${
          isSidebarOpen ? "opacity-50" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="block sm:hidden">
            <GiHamburgerMenu
              className="h-[20px] w-[20px] cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>

          <img
            className="h-10"
            src="src/assets/logo-no-background.png"
            alt="Logo"
          />

          <div className={`flex space-x-4 sm:space-x-8 items-center`}>
            <div className="hidden sm:flex space-x-8 items-center">
              <a href="#" className="text-black">
                Home
              </a>
              <a href="#" className="text-black">
                About
              </a>
              <a href="#" className="text-black">
                Contact
              </a>
            </div>
            {/* Login Button */}
            <Link to="/Login">
              <button className="font-semibold text-C pt-[2.5px] pb-[3px] px-6 rounded-md border border-baseColor-600">
                Login
              </button>
            </Link>
            {/* Signup Button */}
            <Link to="/Register">
              <button className="hover:bg-baseColor-400 font-semibold text-white py-1 px-6 rounded-md bg-baseColor-600">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white text-white transition-transform transform z-20 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          boxShadow: isSidebarOpen ? "0 0 24px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="p-4">
          <FiX
            className="h-6 w-6 text-white cursor-pointer absolute top-4 right-4"
            onClick={closeSidebar}
          />
          <Link to="#" className="block text-black mb-4">
            Home
          </Link>
          <Link to="#" className="block text-black mb-4">
            About
          </Link>
          <Link to="#" className="block text-black mb-4">
            Register as Teacher
          </Link>
          <Link to="#" className="block text-black mb-4">
            Register as Student
          </Link>
          <Link to="/Login" className="block text-black mb-4">
            Login
          </Link>
          <Link to="#" className="block text-black mb-4">
            Contact
          </Link>
        </div>
      </div>
      <div>
        <Welcomepage></Welcomepage>
      </div>
    </div>
  );
}

export default Navbar;
