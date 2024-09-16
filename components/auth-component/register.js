import React, { useState } from "react";
import { AuthService } from "@/services/auth-service";
const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    avatar: null,
    coverImage: null,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file change for avatar and coverImage
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleRemoveFile = (name) => {
    setFormData({
      ...formData,
      [name]: null, // Reset the file input to null
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitForm = new FormData();
    submitForm.append("fullname", formData.fullname);
    submitForm.append("username", formData.username);
    submitForm.append("email", formData.email);
    submitForm.append("password", formData.password);
    submitForm.append("avatar", formData.avatar);
    submitForm.append("coverImage", formData.coverImage);

    try {
      const response = await AuthService.register(submitForm);
      setSuccess("User registered successfully");
      setError("");
    } catch (err) {
      setError("Error registering user");
      setSuccess("");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gray-100 dark:bg-gray-900">
      <h1
        className="text-gray-900 dark:text-white text-4xl"
        style={{ marginBottom: "5rem" }}
      >
        Create an account
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-6"
        style={{ marginBottom: "10rem" }}
      >
        <div className="flex flex-col">
          <label
            htmlFor="fullname"
            className="mb-1 text-gray-700 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="mb-4 px-4 py-2 rounded-lg shadow-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="mb-1 text-gray-700 dark:text-gray-300"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="mb-4 px-4 py-2 rounded-lg shadow-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 px-4 py-2 rounded-lg shadow-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-1 text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="mb-4 px-4 py-2 rounded-lg shadow-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="avatar" className="mb-2">
            Avatar
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex items-center">
            <label
              htmlFor="avatar"
              className="cursor-pointer px-4 py-2 bg-gray-300 text-black dark:bg-gray-700 dark:text-white rounded-lg shadow-lg"
              style={{width: "400px"}}
            >
              {formData.avatar ? formData.avatar.name : "Choose Avatar"}
            </label>
            {formData.avatar && (
              <button
                type="button"
                onClick={() => handleRemoveFile("avatar")}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="coverImage" className="mb-2">
            Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex items-center">
            <label
              htmlFor="coverImage"
              className="cursor-pointer px-4 py-2 bg-gray-300 text-black dark:bg-gray-700 dark:text-white rounded-lg shadow-lg"
              style={{width: "400px"}}
            >
              {formData.coverImage
                ? formData.coverImage.name
                : "Choose Cover Image"}
            </label>
            {formData.coverImage && (
              <button
                type="button"
                onClick={() => handleRemoveFile("coverImage")}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="text-purple-700 dark:text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white dark:hover:bg-purple-500 transition duration-300 ease-in-out dark:bg-gray-800"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
