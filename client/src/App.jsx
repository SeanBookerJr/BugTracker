import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
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
import AllDevTickets from './Pages/Developer/AllDevTickets';
import ProjectDetails from './Pages/User/ProjectDetails'
import TicketDetails from './Pages/User/TicketDetails';
import DevTicketDetails from './Pages/Developer/DevTicketDetails';
import DeveloperProjects from './Pages/Developer/DeveloperProjects';
import DevProjectDetails from './Pages/Developer/DevProjectDetails';
import ManagerProfile from './Pages/Manager/ManagerProfile';
import ManagerProjects from './Pages/Manager/ManagerProjects';
import ManagerTickets from './Pages/Manager/ManagerTickets';
import ManProjectDetails from './Pages/Manager/ManProjectDetails';
import ManTicketDetails from './Pages/Manager/ManTicketDetails';
import RoleAssignments from './Pages/Manager/RoleAssignments';

function App() {

  const [user, setUser] = useState({})

  const { id } = useParams();

  useEffect( () => {
    fetch('/me')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => {
          localStorage.setItem('user', JSON.stringify(data))
          setUser(data)
        })
      }
    })
  }, [])

  console.log(id);
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login user={user} setUser={setUser} />}/>
        <Route path='/CreateAccount' element={ <CreateAccount user={user} setUser={setUser} />}/>
        <Route path='/CustomerDashboard' element={user && <UserDashboard user={user}/>} />
        <Route path='/DeveloperDashboard' element={<DeveloperDashboard user={user}/>} />
        <Route path='/ManagerDashboard' element={<ManagerDashboard user={user}/>} />
        <Route path='/AdminDashboard' element={<AdminDashboard/>} />
        <Route path='/Profile' element={user && <UserProfile user={user} setUser={setUser}/>} />
        <Route path='/DeveloperProfile' element={user && <DeveloperProfile user={user} setUser={setUser}/>} />
        <Route path='/ManagerProfile' element={user && <ManagerProfile user={user} setUser={setUser}/>} />
        <Route path='/Projects' element={<UserProjects user={user} />} />
        <Route path='/DeveloperProjects' element={user && <DeveloperProjects user={user}/>} />
        <Route path='/ManagerProjects' element={user && <ManagerProjects user={user}/>} />
        <Route path='/Tickets' element={user &&  <UserTickets user={user}/>} />
        <Route path='/DevTickets' element={user &&  <AllDevTickets user={user}/>} />
        <Route path='/ManTickets' element={user &&  <ManagerTickets user={user}/>} />
        <Route path='/ProjectDetails/:id' element={user &&  <ProjectDetails user={user}/>} />
        <Route path='/DevProjectDetails/:id' element={user &&  <DevProjectDetails user={user}/>} />
        <Route path='/ManProjectDetails/:id' element={user &&  <ManProjectDetails user={user}/>} />
        <Route path='/TicketDetails/:id' element={user &&  <TicketDetails user={user}/>} />
        <Route path='/DevTicketDetails/:id' element={user &&  <DevTicketDetails user={user}/>} />
        <Route path='/ManTicketDetails/:id' element={user &&  <ManTicketDetails user={user}/>} />
        <Route path='/RoleAssignments' element={user &&  <RoleAssignments user={user}/>} />
      </Routes>
    </Router>
  );
}

export default App;
