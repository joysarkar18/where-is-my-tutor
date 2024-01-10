import React from 'react';
import { Link } from 'react-router-dom';


function Navbar  ()  {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-xl">Find My Tutor</div>

        <div className="flex space-x-6">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Contact</a>

          {/* Login Button */}
          <Link to="/Login"><button className="bg-white hover:bg-sky-700 text-black font-normal  py-1 px-8 rounded-full border border-sky-600">
            Log In
          </button></Link>



          {/* Signup Button */}
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-normal py-1 px-8 rounded-full">
            Sign Up
          </button>


        </div>
      </div>
    </nav>
  );
}

export default Navbar;
