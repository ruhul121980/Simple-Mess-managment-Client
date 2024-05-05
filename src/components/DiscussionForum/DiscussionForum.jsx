import React from 'react';

const DiscussionForum = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Discussion Forum</h1>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">About Gatsby</h2>
          <p className="text-gray-700 mb-4">What do you think about the symbolism of the green light in the novel</p>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Posted by John Doe</span>
            <span className="text-gray-600">2 hours ago</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              View Post
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">The Beauty</h2>
          <p className="text-gray-700 mb-4">What do you think about the symbolism of the green light in the Fiction</p>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Posted by Akash</span>
            <span className="text-gray-600">5 hours ago</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              View Post
            </button>
          </div>
        </div>

      
      </div>

      
      <div className="mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded">
          Create New Thread
        </button>
      </div>
    </div>
  );
};

export default DiscussionForum;
