import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function UserProfile() {
  const [profile, setProfile] = useState({ username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });
  const navigate = useNavigate();

  const save = async () => {
    await client.updateUser(profile);
  };
  const fetchProfile = async () => {
    const account = await client.profile();
    console.log(account);
    setProfile(account);
  };

  const signout = async () => {
    await client.signout();
    console.log("done");
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div><br/>
      <div>
        <h1>Profile</h1> 
      </div><br/>
      <Link to="/Kanbas/Account/Admin/Users"
                className="btn btn-warning w-100">
                Users
            </Link><br/><br/>
      {profile && (
        <div>
            
          <input className="form-control" value={profile.username} onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })} placeholder="username" /><br/>
          <input className="form-control" value={profile.password} onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })} placeholder="password" /><br/>
          <input className="form-control" value={profile.firstName} onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })} placeholder="first name" /><br/>
          <input className="form-control" value={profile.lastName} onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })} placeholder="last name" /><br/>
          <input className="form-control" value={profile.dob} type="date" onChange={(e) =>
            setProfile({ ...profile, dob: e.target.value })} /><br/>
          <input className="form-control" value={profile.email} onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })} placeholder="e-mail" /><br/>
          <select className="form-select" onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })}
              style={{marginBottom: "12px"}}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <button onClick={save} className="btn btn-primary"
        style={{marginRight: "8px"}}>
        Save
      </button>
      <button onClick={signout} className="btn btn-danger">
        Signout
      </button>
    </div>
  );
}
