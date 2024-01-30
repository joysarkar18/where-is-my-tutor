import Navbar from "./navbar";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [localStorageData, setLocalStorageData] = useState(null);

  useEffect(() => {
    // Function to get data from localStorage
    const getDataFromLocalStorage = () => {
      try {
        // Retrieve data from localStorage
        const storedData = localStorage.getItem("email");
        const storeName = localStorage.getItem("userName");

        console.log({ storedData, storeName });

        // Update the component state with the retrieved data
        setLocalStorageData({ email: storedData, name: storeName });
      } catch (error) {
        console.error("Error retrieving data from localStorage:", error);
      }
    };

    // Call the function to get data when the component mounts
    getDataFromLocalStorage();
  }, []); //
  return (
    <div>
      <Navbar></Navbar>

      <div className="text-center mb-10 mt-10 text-purple text-5xl font-bold">
        Welcome
      </div>
      {localStorageData && (
        <div className="flex flex-col text-3xl font-semibold justify-center items-center text-green-500">
          <div>{`User email = ${localStorageData.email}`}</div>
          <div>{`Username = ${localStorageData.name}`}</div>
        </div>
      )}
    </div>
  );
}

export default App;
