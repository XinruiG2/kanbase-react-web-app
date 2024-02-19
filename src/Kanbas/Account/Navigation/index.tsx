import React from 'react'
import { Link } from 'react-router-dom';

const AccountNavigation = () => {
  return (
    <div>
        <ul>
            <li><a href="#">Notifications</a></li>
            <li><Link to="/Kanbas/Account/Profile">Profile</Link></li>
            <li><a href="#">Files</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">ePortfolios</a></li>
            <li><a href="#">Shared Content</a></li>
            <li><a href="#">The Hub</a></li>
            <li><a href="#">Qwickly Course Tools</a></li>
            <li><a href="#">Global Announcements</a></li>
        </ul>
    </div>
  )
}

export default AccountNavigation