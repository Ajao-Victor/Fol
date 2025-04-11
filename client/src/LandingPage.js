import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar2 from './Components/Navbar/Navbar2';
import Footer from './Footer';
import Carousel from './Carousel';
import HomeContent from './HomeContent';

const Landing = () => {
    const [user, setUser] = useState(null); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        } else {
            fetchUserData(); 
        }
    }, []);

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('authToken'); 
            if (!token) {
                setError('No authentication token found');
                return;
            }
            const response = await axios.get('https://fol.onrender.com/landing', {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            localStorage.setItem('user', JSON.stringify(response.data));
            setUser(response.data);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch user data');
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <div style={{position: 'fixed', width: '100%',zIndex: '5', top: "0px"}}>
                        <Navbar2/>
                    </div>
                    <div style={{paddingTop: '85px',border: '1px solid black',backgroundColor: '#1a1a1a',color: 'white',paddingLeft:'5%'}}><strong><h2 style={{color: 'white',position:'fixed',backgroundColor:'#1a1a1a',padding:'10px',marginTop:'0%'}}>Hello, {user.username}</h2></strong></div>
                    <div style={{position:'fixed',top:'93px',right:'5%',color:'WHITE',backgroundColor: '#1a1a1a',padding:'10px'}}>
                        <strong>TEIR {user.teir} USER</strong>
                    </div>
                    

                    <div style={{backgroundColor: '#1a1a1a',padding: '5% 5% 5% 5%',paddingTop:'50px'}}><Carousel/></div>
                    <HomeContent/>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Landing;
