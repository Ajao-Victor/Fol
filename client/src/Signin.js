import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Signin.css';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const onUsernameChange = (event) => setUsername(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);

    const onSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('https://fol.onrender.com/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.error || 'Signin failed');
            }
    
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.specUser));
    
            navigate('/Home');
    
        } catch (err) {
            setError(err.message);
        }
    };
    

    return (
        <div className="mostMajorDiv">
            <div className="majordiv">
            <div className="minordiv" style={{ backgroundColor: "pink" }}>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={onUsernameChange}
                        style={{ margin: 10, padding: 10 }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={onPasswordChange}
                        style={{ margin: 10, padding: 10 }}
                    />
                    <input type="submit" value="Sign In" style={{ margin: 10, padding: 10 }} />
                </form>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <Link to="/signup" style={{ textDecoration: "none", color: "black", fontFamily: "sans-serif" }}>
                    Don't have an account? SIGN UP
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Signin;
