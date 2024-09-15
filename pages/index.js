// import React from "react";

// const HomePage = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h1 className="text-white mb-6 text-4xl">
//           Please login to see the content
//           </h1>
//         <div className="flex items-center justify-center">
//           <button className=" text-purple-700 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">
//             Login
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const HomePage = () => {
  const { theme } = useContext(ThemeContext); // Get the current theme from the context

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900`}
      >
        <h1 className="text-gray-900 dark:text-white mb-6 text-4xl">
          Please login to see the content
        </h1>
        <div className="flex items-center justify-center">
          <button className="text-purple-700 dark:text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white dark:hover:bg-purple-500 transition duration-300 ease-in-out dark:bg-gray-800">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
