import React from "react";
import './Home.css'
import Navbar from "./Components/Navbar/Navbar";
import logo from './Components/logo.png'
import About1 from "./About1";
import About2 from "./About2";
import Footer from "./Footer";
const Home = () => {
return(
    <div>
        <div style={{position: "fixed",width: "100%"}}>
            <Navbar /> 
        </div>
<div className="grandParent" style={{paddingBottom: '20px'}}>
   
<div className="parent">
           <div className="image">
           <img src={logo} alt="logo"/>
           </div>
            <div className="child1">
            <strong><h1>Idea to FOL app in seconds</h1></strong>
            </div>
            <div className="child2">
            fol app is just the beginning!
            </div>
            <div className="child3">
            Welcome to Your Road to Full-Stack Development! 

            Embark on an exciting journey to becoming a PERN stack (PostgreSQL, Express.js, React.js, Node.js) web developer! Whether you're just starting or looking to sharpen your skills, this platform guides you through the essentials of backend and frontend development. Master databases, build dynamic user interfaces, and deploy full-stack applications—step by step. Let's turn your coding dreams into reality! Sign in or Sign up to enjoy our exclusive contents!
            </div>
        </div>
</div>
<div>
    <About1/>
</div>

<div>
    <About2/>
</div>
<div>
    <Footer/>
</div>
    </div>
)
}
export default Home;