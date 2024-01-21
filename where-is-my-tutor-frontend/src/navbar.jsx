import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="bg-white p-4 lg:mx-32 xl:mx-60 relative z-10">
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

          <div
            className={`flex space-x-4 sm:space-x-8 items-center ${
              isSidebarOpen ? "hidden" : "block"
            }`}
          >
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
              <button className="font-semibold text-baseColor-600 pt-[2.5px] pb-[3px] px-6 rounded-md border border-baseColor-600">
                Login
              </button>
            </Link>
            {/* Signup Button */}
            <button className="hover:bg-baseColor-400 font-semibold text-white py-1 px-6 rounded-md bg-baseColor-600">
              Register
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-[68px] left-0 h-screen w-64 bg-gray-800 text-white transition-transform transform z-20 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <Link to="#" className="block text-white mb-4">
            Home
          </Link>
          <Link to="#" className="block text-white mb-4">
            About
          </Link>
          <Link to="#" className="block text-white mb-4">
            Register as Teacher
          </Link>
          <Link to="#" className="block text-white mb-4">
            Register as Student
          </Link>
          <Link to="/Login" className="block text-white mb-4">
            Login
          </Link>
          <Link to="#" className="block text-white mb-4">
            Contact
          </Link>
        </div>
      </div>

      <div className={`relative z-0 ${isSidebarOpen ? "ml-64" : "ml-0"}`}></div>
    </div>
  );
}

export default Navbar;
