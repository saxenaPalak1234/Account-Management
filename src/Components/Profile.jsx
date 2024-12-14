import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false); 

  useEffect(() => {
    // Retrieve the user data from localStorage when the component mounts
    const storedUser = JSON.parse(localStorage.getItem('userData'));

    if (storedUser) {
      // If user data exists in localStorage, set it to state
      setUser(storedUser);
      setFormData({ ...storedUser }); // Populate the form with the current user data
    } else {
      // If no user data is found, redirect to login page
      window.location.href = '/login';
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission (updating user)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update user data in localStorage
    localStorage.setItem('userData', JSON.stringify(formData));

    // Update the user state with the new data
    setUser(formData);
    setIsEditing(false); // Exit edit mode
    toast.success('Profile updated successfully!');
  };



  return (
    <div>
      <main className="ml-60 pt-16 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
          

              {/* Check if the user data has been loaded */}
              {user ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">User Information</h2>

                    {/* Show either view or edit form based on isEditing state */}
                    {isEditing ? (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-700">Name:</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700">Email:</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700">Phone:</label>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="px-4 py-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className='p-4 bg-white border rounded-xl text-gray-800 space-y-2'>
                        <p className="p-3 text-sm text-gray-800 text-center bold"><strong>Name:</strong> {user.name}</p>
                        <p className="p-3 text-sm text-gray-800 text-center"><strong>Email:</strong> {user.email}</p>
                        <p className="p-3 text-sm text-gray-800 text-center"><strong>Phone:</strong> {user.phone}</p>
                      </div>
                    )}
                  </div>

                  {/* Edit button */}
                  <div>
                    <button
                      onClick={() => setIsEditing(!isEditing)} // Toggle edit mode
                      className=" py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                    >
                      {isEditing ? 'Cancel' : 'Edit'}
                    </button>
                  </div>

                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
