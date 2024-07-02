import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; // Assuming you're using React Router
import NavBar from '../NavBar/NavBar';
import MemberCard from '../Members/MemberCard';

const RoomDetails = () => {
  const { id } = useParams(); // Fetching ID from URL params
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://mess-managment-kappa.vercel.app/roomDetails/${id}`); // Replace with your actual API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        {data ? (
          <>
            <h2 className="text-2xl mb-4">Data for Room No: {data.roomNumber}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">ID:</p>
                <p>{data._id}</p>
              </div>
              <div>
                <p className="font-semibold">Name:</p>
                <p>{data.roomName}</p>
              </div>
              {/* Add more fields as per your API response */}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <div className="mt-4">
          <Link to={`/add-member/${id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Members
          </button></Link>
        </div>
      </div>
      <MemberCard key={id} id={id}></MemberCard>
    </div>
  
    
    </div>
  );
};

export default RoomDetails;
