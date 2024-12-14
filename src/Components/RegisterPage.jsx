import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
   console.log(formData , "222")

  // Navigate hook to redirect after successful registration
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Save form data to localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    toast.success("Account Created Successfully ")

    // Redirect to AccountPage
    navigate('/login');
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign Up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  border border-gray-500 rounded-lg p-5">
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                autoComplete="name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
              Phone
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
                required
                autoComplete="phone"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:ring-2 focus:ring-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
         <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?
                  <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 px-2">
                  Log In 
                  </Link>
                </p>
      </div>
    </div>
  );
};

export default RegisterPage;



