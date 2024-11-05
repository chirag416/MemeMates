import React from 'react';

const FriendsOnline = () => {
  // Sample data 
  const friends = [
    { id: 1, name: 'Alex', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Jordan', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Taylor', avatar: 'https://via.placeholder.com/50' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-pink-500 mb-4">Friends Online</h2>
      <div className="flex flex-col space-y-2">
        {friends.map((friend) => (
          <div key={friend.id} className="flex items-center space-x-3 hover:bg-pink-50 rounded">
            <img src={friend.avatar} alt={friend.name} className="rounded-full w-10 h-10" />
            <span className="text-gray-700">{friend.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsOnline;
