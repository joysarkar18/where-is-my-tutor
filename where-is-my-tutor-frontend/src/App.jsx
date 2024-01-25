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

      {localStorageData ? (
        <p className="mx-11 mt-10">
          {" "}
          {`email =  ${localStorageData.email} 
        userName = ${localStorageData.name} 
        `}
        </p>
      ) : (
        <p>No data found in localStorage</p>
      )}
    </div>
  );
}

export default App;
