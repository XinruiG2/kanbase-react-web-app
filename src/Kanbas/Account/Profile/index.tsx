import React from 'react'
import AccountNavigation from '../Navigation'
import { Routes, Route, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
        <div>
        <div>Jose Annunziato's Profile</div> <hr/>
        </div><br/>
            <div className="align-space-between">
                <h3>Jose Annunziato</h3>
                <button type="button"><Link to="/Kanbas/Account/Edit">Edit Profile</Link></button>
            </div><br/>
            <h4>
                Contact
            </h4>
            <p>No registered servies, you can add some on the <a href="#">settings</a> page.</p>
            <h4>
                Biography
            </h4>
            <p>Faculty, Software Engineer, AI, Space, and renewables enthusiast.</p>
            <h4>Links</h4>
            <a href="https://youtube.com">YouTube</a>
    </div>
  )
}

export default Profile