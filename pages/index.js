import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useRouter } from "next/router";

const HomePage = () => {
  const { theme } = useContext(ThemeContext); // Get the current theme from the context
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900`}
      >
        <h1 className="text-gray-900 dark:text-white mb-6 text-4xl">
          Please login to see the content
        </h1>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleLogin}
            className="text-purple-700 dark:text-white font-semibold
            py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 
            hover:text-white dark:hover:bg-purple-500 
            transition duration-300 ease-in-out dark:bg-gray-800"
          >
            Login
          </button>

          <button
            onClick={handleRegister} // Create and handle registration function
            className="text-purple-700 dark:text-white font-semibold
            py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 
            hover:text-white dark:hover:bg-purple-500 
            transition duration-300 ease-in-out dark:bg-gray-800"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
