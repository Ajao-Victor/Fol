import React from 'react';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import Landing from './LandingPage';
import Home from './Home';
import AboutDeveloper from './AboutDeveloper';
import Services from './Services';
import Protection from './routeProtection';
import PostgreSQLCommands from './learning/postgresLearning';
import NodeLearning from './learning/NodeLearning';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateAccount from './Components/Update';
import ReactLearning from './learning/ReactLearning';
import ExpressLearning from './learning/ExpressLearning';


const App = () =>{
  return(
    <div>
        <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path='/Home' element={<Protection> <Landing/> </Protection>}/>
          <Route path='/AboutDeveloper' element={ <AboutDeveloper/> }/>
          <Route path='/Services' element={<Services/> }/>
          <Route path='/postgreSQL Learning' element={<Protection><PostgreSQLCommands/></Protection>}/>
          <Route path='/Node.JS Learning' element={<Protection><NodeLearning/></Protection>}/>
          <Route path='/React Learning' element={<Protection><ReactLearning/></Protection>}/>
          <Route path='Update-Account' element={<Protection><UpdateAccount/></Protection>}/>
          <Route path='Express Learning' element={<Protection><ExpressLearning/></Protection>}/>
        </Routes>
        </Router>
    </div>
  )
}
  export default App;