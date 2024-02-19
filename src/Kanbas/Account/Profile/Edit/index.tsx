import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const EditProfile = () => {
  return (
    <div>
        <h2>Jose Annunziato</h2>
        <br/>
        <label style={{marginRight: '12px'}}>Name:* <input id="edit-name" value="Jose Annunziato"/></label>
        <label>Pronouns: <select id="edit-pronouns">
            <option>None</option>
            </select> </label><br/><br/>
        <label>
            Title:
            <input type="text"/>
        </label><br/>
        <h3>Contact</h3>
        <p>No registered services, you can add some on the <a href="#">settings</a> page.</p>

        <h3>Contact</h3>
        <p>No registered services, you can add some on the <a href="#">settings</a> page.</p>
        
        <h3>Biography</h3>
        <p>Faculty, Software Engineer, AI, Space, and renewables enthusiast.</p>
        <textarea cols={50} rows={3}>Faculty, Software Engineer, AI, Space, and renewables enthusiast.</textarea>

        <h3>Links</h3>
        <ul>
            <li><a href="#">YouTube Links to an external site</a></li>
        </ul>
        <div className="account-edit-grid">
            <div>
                Title<br/>
                <input value="YouTube"/>
            </div>
            <div>→</div>
            <div>
                URL<br/>
                <input value="https://youtube.com"/>
            </div>
            <div>
                <a href="#">Remove</a>
            </div>
        </div> <br/>
        <button type="button">Add another link</button><br/>
        <button type="button"><Link to="/Kanbas/Account/Profile">Cancel</Link></button>
        <button type="button"><Link to="/Kanbas/Account/Profile">Save Profile</Link></button><br/>
        <button type="button">Edit Profile</button>
        <button type="button"><Link to="/Kanbas/Account/Profile">Cancel Editing</Link></button>
    </div>
  )
}

export default EditProfile