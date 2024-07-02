import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TableRoom = () => {
    
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const response = await axios.get('https://mess-managment-kappa.vercel.app/api/rooms');
            setRooms(response.data);
        } catch (error) {
            console.error('There was an error fetching the rooms!', error);
        }
    };

                  

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        {console.log(rooms)}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Rooms List</h2>
            <div className="overflow-x-auto">
                <table className="table min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-4 px-0 border-b border-gray-200">Room Number</th>
                            <th className="py-4 px-0 border-b border-gray-200">Room Name</th>
                            <th className="py-4 px-0 border-b border-gray-200">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                            <tr key={room._id}>
                                <td className="py-4 px-0 border-b border-gray-200">{room.roomNumber}</td>
                                <td className="py-4 px-0 border-b border-gray-200">{room.roomName}</td>
                                <td className="py-4 px-0 border-b border-gray-200">
                                    <Link to={`/room-details/${room._id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Details
                                    </button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    


    );
};

export default TableRoom;
