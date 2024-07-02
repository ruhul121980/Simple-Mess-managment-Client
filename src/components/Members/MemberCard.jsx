import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MemberCard = ({ id }) => {
  console.log("props", id);
  const [memberData, setMemberData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await axios.get(`https://mess-managment-kappa.vercel.app/api/members/${id}`);
        setMemberData(response.data);
      } catch (err) {
        console.error('Error fetching member data:', err);
        setError('Error fetching member data');
      }
    };

    fetchMemberData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (memberData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="mt-10 text-center text-purple-400 text-3xl">Members</h1>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {console.log("now", memberData)}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {memberData.map(member => (
            <div key={member._id} className="card bg-base-100 w-96 shadow-xl m-4">
              <div className="card-body">
                <h2 className="card-title">Room No: {member.roomNo}</h2>
                <h2 className="card-title">Name: {member.name}</h2>
                <p>Phone: {member.phone}</p>
                <p>Address: {member.address}</p>
                <div className="card-actions justify-end">
                <Link to={`/member-details/${member._id}`}><button className="btn btn-primary font-bold">Member Details</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
