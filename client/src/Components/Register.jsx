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
    // ruajtja e informacioneve tek user
    const user = {
      // emri nga models : emri i state
      username: username,
      email: email,
      password: password,
    };

    // Therritja e metodes post ne routerin; the kalimi info tek databasa
    axios.post("http://localhost:3030/register", { user }).then((res) => {
      if (res.data.code === 200) {
        // nese regijstrimi eshte ne rregull do te kalohet tek faqja e login
        navigate("/login");
      } else {
        // perndryshe shkaqet error
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
