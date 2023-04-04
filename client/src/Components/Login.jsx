import axios from "axios";
import React, { useState } from "react";
import '../css/Login.css';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState(localStorage.getItem("loggedIn"));
  const handleSubmit = (e) => {
    e.preventDefault();
    var user = {
	    username: username,
      email: email,
      password: password,
    };
    axios.post("http://localhost:3030/checkLogin", { user }).then((res) => {
      if (res.data.code === 200) {
        // Pas login kalon tek places
        localStorage.setItem("loggedIn", true);
        navigate("/");
      } else {
        alert(res.data.error);
      }
    });
    setLog(!log);
  };

  return (
    <div className="LoginContainer">
			<div className="LoginFormContainer">
				<div className="LeftLoginDiv">
					<form className="FormContainer" onSubmit={handleSubmit}>
						<h1>Login to your account!</h1>
						<input
                            type="text"
                            onChange={(e) => {
                            setEmail(e.target.value);
                            setUsername(e.target.value);
                            }}
                            value={email || username}
                            placeholder="Enter email or username"
                            required
                            className="LoginInput"
                            />
						<input
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							placeholder="Enter password"
							required
							className="LoginInput"
						/>
						<button type="submit" className="LoginGreenBtn">
							Login
						</button>

					</form>
				</div>
				<div className="RightLoginDiv">
					<h1>Register now!</h1>
					<Link to="/register">
						<button type="button" className="LoginWhiteBtn">
							Register
						</button>
					</Link>
				</div>
			</div>
		</div>
  );
};

export default Login;

