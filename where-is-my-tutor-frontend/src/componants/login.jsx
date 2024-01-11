import React from 'react';
import { useState } from 'react';
import background from '../assets/background.jpg'
function Login() {
  const [isTeachersActive, setIsTeachersActive] = useState(false);

  const toggleButton = () => {
    setIsTeachersActive(!isTeachersActive);
  };

  return (
    <div className='w-full h-screen flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
          <img className='w-full h-full' src={background} alt="/" />
        </div>
        <div className='p-4 flex flex-col justify-around'>
          <form>
            <h2 className='text-4xl font-bold text-center mb-8'>LogIn To Your Account</h2>
            
            <div className="flex items-center space-x-0">
          <button
            className={`px-4 py-1 rounded-none ${isTeachersActive
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
              }`}
            onClick={toggleButton}
          >
            Teachers
          </button>
          <button
            className={`px-4 py-1 rounded-none ${!isTeachersActive
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
              }`}
            onClick={toggleButton}
          >
            Students
            </button>
            </div>
            
            <div className='py-2'>
              <input className='bordar p-2 mr-2 ' type="text" placeholder='Username' />
              <input className='bordar p-2 ' type="password" placeholder='Password' />
            </div>
            <button className='w-full py-2 my-4 bg-sky-600 rounded-sm hover:bg-sky-500'>Sign In</button>
            <button className=' border border-gray-600-400 px-6 py-1 rounded-md hover:bg-gray-400'>
            <p className='text-center'>Forgot Username Or Password</p>
            </button>
          </form>
          <button>
          <p className='text-center'>sign Up</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;