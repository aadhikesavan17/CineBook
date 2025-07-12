import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const dummyUser = {
      name: name,
      email: email,
    };

    localStorage.setItem("user", JSON.stringify(dummyUser));
    navigate("/movies");
  };

  return (
    <div className="login-container">


      <div className="icon-background">
        <div className="icon icon1">🎬</div>
        <div className="icon icon2">🍿</div>
        <div className="icon icon3">🎶</div>
        <div className="icon icon4">🍕</div>
      </div>
      
      <form className="login-form" onSubmit={handleLogin}>
        <h2>🎟️ Movie Ticket Login</h2>

         <label>Name</label>
         <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;