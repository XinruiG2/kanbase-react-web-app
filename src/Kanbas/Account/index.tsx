import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AccountNavigation from './Navigation';
import Profile from './Profile';
import EditProfile from './Profile/Edit';

const Account = () => {
  return (
    <div className="align-at-start" style={{alignItems: 'start', gap: '20px'}}>
        <AccountNavigation />
        
        <Routes>
            <Route path="Profile" element={<Profile />} />
            <Route path="Edit" element={<EditProfile />} />
        </Routes>
    </div>
  );
};

export default Account;

