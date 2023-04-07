import axios from "axios";
import React, { useState } from "react";
import "../css/Register.css";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Saving infos at user model
    const user = {
      
      username: username,
      email: email,
      password: password,
    };

    // Call of post method in router and saving info to database
    axios.post("http://localhost:3030/register", { user }).then((res) => {
      if (res.data.code === 200) {
        // If the login is completed it will go to login component
        navigate("/login");
      } else {
        // Else it will be error
        window.alert(res.data.error);
      }
    });
  };

  return (
    <div className="SignUpContainer">
			<div className="SignUpFormContainer">
				<div className="LeftSignUpDiv">
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className="WhiteBtnSignUp">
							Login
						</button>
					</Link>
				</div>
				<div className="RightSignUpDiv">
					<form className="FormContainer" onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							onChange={(e) => setUsername(e.target.value)}
							type="text"
							value={username}
							placeholder="Enter username"
							required
							className="SignUpInput"
						/>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							value={email}
							placeholder="Enter email"
							required
							className="SignUpInput"
						/>
						<input
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							placeholder="Enter password"
							required
							className="SignUpInput"
						/>
						<button onClick={handleSubmit} className="SignUpBtn">
							Sign up
						</button>
					</form>
				</div>
			</div>
		</div>
  );
};

export default Register;
