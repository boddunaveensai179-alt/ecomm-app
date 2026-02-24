import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    u => u.username === username && u.password === password
  );

  const loginUser = validUser;

  if (loginUser) {
    const role = loginUser.role || "user";
    const userId = loginUser.id || `user-${loginUser.username}`;

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", userId);
    localStorage.setItem("userName", loginUser.username);
    localStorage.setItem("userEmail", loginUser.email || `${loginUser.username}@shop.local`);
    localStorage.setItem("token", `token-${userId}`);
    navigate(role === "admin" ? "/approve-orders" : "/Products1");
  } else {
    alert("Invalid username or password");
  }
 };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"   // 👈 Outer controls position
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          border: "1px solid black",
          width: "320px",
          minHeight: "450px",   // 👈 Inner controls height
          padding: "80px 40px 40px 40px",
          borderRadius: "10px"
        }}
      >
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button onClick={handleLogin}>Login</button>
        <p style={{ fontSize: "14px", marginTop: "15px" }}>
            New user? <Link to="/signup">Signup here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
