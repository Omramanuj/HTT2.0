import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserPieChartComponent from './UserPieChartComponent';

const UserSelector = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/users');
        setUsers(response.data);
        console.log('Users fetched:', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSelectUser = (event) => {
    setSelectedUserId(event.target.value);
  };

  const selectedUser = users.find(user => user._id === selectedUserId);
  const userDataForChart = selectedUser ? [
    selectedUser.services,
    selectedUser.aboutUs,
    selectedUser.nutritionStrategy,
    selectedUser.ayurveda,
    selectedUser.protein,
    selectedUser.diet,
  ] : [];

  return (
    <div>
      <select onChange={handleSelectUser} value={selectedUserId}>
        <option value="">Select a User</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
      {selectedUserId && (
        <UserPieChartComponent
          userData={{
            series: userDataForChart,
            labels: ['Services', 'About Us', 'Nutrition Strategy', 'Ayurveda', 'Protein', 'Diet']
          }}
        />
      )}
    </div>
  );
};

export default UserSelector;
