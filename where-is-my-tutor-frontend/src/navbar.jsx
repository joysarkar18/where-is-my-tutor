import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  return (
    <nav className="bg-white p-4 lg:mx-32 xl:mx-60">
      <div className="container mx-auto flex justify-between items-center">
        <div className="block sm:hidden">
          <GiHamburgerMenu className="h-[20px] w-[20px]" />
        </div>

        <img className="h-10" src="src/assets/logo-no-background.png"></img>

        <div className="flex space-x-4 sm:space-x-8 items-center">
          <div className="hidden sm:flex space-x-8  items-center">
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
            <button className="font-semibold text-baseColor-600 pt-[2.5px] pb-[3px]   px-6 rounded-md border border-baseColor-600">
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
  );
}

export default Navbar;
