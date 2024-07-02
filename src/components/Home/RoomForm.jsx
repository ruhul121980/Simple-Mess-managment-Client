import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const RoomDetailsForm = () => {
    const [formData, setFormData] = useState({
        roomNumber: '',
        roomName: '',
    });
    const [submitted, setSubmitted] = useState(false); // State to track form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://mess-managment-kappa.vercel.app/api/rooms', formData)
            .then(response => {
                console.log(response.data);
                // Clear the form
                setFormData({
                    roomNumber: '',
                    roomName: '',
                });
                setSubmitted(true); // Set submitted to true after successful form submission
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            });
    };

    // Redirect to home page after successful form submission
    if (submitted) {
        return <Navigate to="/home" />;
    }

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Room Details Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomNumber">
                            Room Number
                        </label>
                        <input
                            id="roomNumber"
                            name="roomNumber"
                            type="text"
                            value={formData.roomNumber}
                            onChange={handleChange}
                            placeholder="Enter Room Number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomName">
                            Room Name
                        </label>
                        <input
                            id="roomName"
                            name="roomName"
                            type="text"
                            value={formData.roomName}
                            onChange={handleChange}
                            placeholder="Enter Room Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Create Room
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RoomDetailsForm;
