import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css'

import Login from './Pages/Login/Index'
import CreateAccount from './Pages/Login/CreateAccount';
import UserDashboard from './Pages/User/UserDashboard';
import DeveloperDashboard from './Pages/Developer/DeveloperDashboard';
import ManagerDashboard from './Pages/Manager/ManagerDashboard'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import UserProfile from './Pages/User/UserProfile';
import DeveloperProfile from './Pages/Developer/DeveloperProfile';
import UserProjects from './Pages/User/UserProjects';
import UserTickets from './Pages/User/UserTickets';
import ProjectDetails from './Pages/User/ProjectDetails'
import TicketDetails from './Pages/User/TicketDetails';
import DevTicketDetails from './Pages/Developer/DevTicketDetails';
import DeveloperProjects from './Pages/Developer/DeveloperProjects';
import DevProjectDetails from './Pages/Developer/DevProjectDetails';

function App({cable}) {

  const [user, setUser] = useState({})

  useEffect( () => {
    fetch('/me')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => {
          setUser(data)
        })
      }
    })
  }, [])


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login user={user} setUser={setUser} />}/>
        <Route path='/CreateAccount' element={ <CreateAccount user={user} setUser={setUser} />}/>
        <Route path='/CustomerDashboard' element={user && <UserDashboard user={user}/>} />
        <Route path='/DeveloperDashboard' element={<DeveloperDashboard user={user}/>} />
        <Route path='/ManagerDashboard' element={<ManagerDashboard/>} />
        <Route path='/AdminDashboard' element={<AdminDashboard/>} />
        <Route path='/Profile' element={user && <UserProfile user={user} setUser={setUser}/>} />
        <Route path='/DeveloperProfile' element={user && <DeveloperProfile user={user} setUser={setUser}/>} />
        <Route path='/Projects' element={user && <UserProjects user={user}/>} />
        <Route path='/DeveloperProjects' element={user && <DeveloperProjects user={user}/>} />
        <Route path='/Tickets' element={user &&  <UserTickets user={user}/>} />
        <Route path='/ProjectDetails/:id' element={user &&  <ProjectDetails user={user}/>} />
        <Route path='/DevProjectDetails/:id' element={user &&  <DevProjectDetails user={user}/>} />
        <Route path='/TicketDetails/:id' element={user &&  <TicketDetails user={user}/>} />
        <Route path='/DevTicketDetails/:id' element={user &&  <DevTicketDetails user={user}/>} />
      </Routes>
    </Router>
  );
}

export default App;
