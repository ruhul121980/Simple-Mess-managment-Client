import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "./../NavBar/NavBar";

const DetailsMember = () => {
  const { id } = useParams();
  const [memberDetails, setMemberDetails] = useState({});
  const [memberPayment, setMemberPayment] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    memberId: id || "",
  });

  useEffect(() => {
    fetchMemberDetails();
    fetchmemberPayment();
  }, []);

  const fetchMemberDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/member-details/${id}`
      );
      setMemberDetails(response.data);
    } catch (error) {
      console.error("There was an error fetching the member details!", error);
    }
  };

  const fetchmemberPayment = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/member-payment/${id}`
      );
      setMemberPayment(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("There was an error fetching the member payment details!", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/payment`, formData);
      alert("Payment details submitted successfully");
      setFormData({ amount: "", date: "", memberId: "" }); // Reset form data
      fetchmemberPayment(); // Re-fetch payment details after successful submission
    } catch (error) {
      console.error("There was an error submitting the payment details!", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-4">
          Member Details of {memberDetails.name}
        </h1>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="amount"
              >
                Paid amount
              </label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                className="text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit Payment
            </button>
          </form>
        </div>

        <div className="text-center font-bold text-purple-700">
          <h4>Room No: {memberDetails.roomNo}</h4>
          <h4>Member Name:{memberDetails.name}</h4>
        </div>

        <div className="flex flex-col items-center min-h-screen">
          <div className="bg-white p-2 rounded-lg w-full max-w-2xl">
            <div className="overflow-x-auto">
              <table className="table min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-0 border-b border-gray-200">Paid Amount</th>
                    <th className="py-4 px-0 border-b border-gray-200">Date</th>
                    <th className="py-4 px-0 border-b border-gray-200">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {memberPayment.map((payment, index) => (
                    <tr key={index}>
                      <td className="py-4 px-0 border-b border-gray-200">{payment.amount}</td>
                      <td className="py-4 px-0 border-b border-gray-200">{payment.date}</td>
                      <td className="py-4 px-0 border-b border-gray-200"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsMember;
