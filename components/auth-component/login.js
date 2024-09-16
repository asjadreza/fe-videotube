import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-gray-900 dark:text-white mb-6 text-4xl">Login</h1>
      <form className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Email"
          className="mb-4 px-4 py-2 rounded-lg shadow-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 px-4 py-2 rounded-lg shadow-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="text-purple-700 dark:text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white dark:hover:bg-purple-500 transition duration-300 ease-in-out dark:bg-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login