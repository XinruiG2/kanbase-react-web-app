import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  const signup = () => {
    navigate("/Kanbas/Account/Signup");
  }

  return (
    <div>
      <h1>Signin</h1>
      <input value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}
        style={{marginBottom: "5px"}} /><br/>
      <input value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}
        style={{marginBottom: "8px"}} /><br/>
      <button className="btn btn-primary" onClick={signin}> Signin </button><br/><br/>
      <div style={{textDecoration: "underline"}} className="cursor-change-on-hover"
        onClick={signup}>
        Don't have an account? Sign up
    </div>
    </div>
  );
}
