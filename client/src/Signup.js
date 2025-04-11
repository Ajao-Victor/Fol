import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onUsernameChange = (event) => setUsername(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload

        try {
            const response = await fetch('http://localhost:9000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Signup failed');
            }

            navigate('/Signin'); 

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <div className="parentMajorDiv">
            <div className="majordiv">
                <div className="minordiv" style={{ backgroundColor: "pink" }}>
                    <form onSubmit={onSubmit}>
                        <input
                            onChange={onUsernameChange}
                            required
                            type="text"
                            placeholder="Register Username"
                            value={username}
                            style={{ margin: 10, padding: 10 }}
                        />
                        <input
                            onChange={onPasswordChange}
                            required
                            type="password"
                            placeholder="Register Password"
                            value={password}
                            style={{ margin: 10, padding: 10 }}
                        />
                        <input type="submit" value="Sign Up" style={{ margin: 10, padding: 10 }} />
                    </form>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <Link to="/Signin" style={{ textDecoration: "none", color: "black" }}>
                        Already have an account? SIGN IN
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Signup;

