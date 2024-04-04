import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AccountNavigation from './Navigation';
import Profile from './Profile';
import EditProfile from './Profile/Edit';
import Signin from '../../Users/Signin';
import UserProfile from '../../Users/Profile';
import UserTable from '../../Users/Table';
import Signup from '../../Users/Signup';

const Account = () => {
  return (
    <div className="align-at-start" style={{alignItems: 'start', gap: '20px'}}>
        <AccountNavigation />
        
        <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="JoseProfile" element={<Profile />} />
            <Route path="Edit" element={<EditProfile />} />
            <Route path="/Profile" element={<UserProfile />} />
            <Route path="/Admin/Users" element={<UserTable />} />
        </Routes>
    </div>
  );
};

export default Account;

