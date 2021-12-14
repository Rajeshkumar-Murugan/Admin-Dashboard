import './App.css';
import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import SideBar from './components/sidebar';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent'
import EditStudent from './components/EditStudent';
import Sample from './components/sample';
export const StudentContext= React.createContext();


function App() {
  let data1 = {earning:"30,000", annual:"3,60,000", task:50, pending:26 }
  let [data, setData]=useState([
         
    {
        name:"Rajesh",
        grad:"B.E",
        dept: "Electrical",
        mobile:"123456789",
        email:"rajesh@email.com"

    },
    {
        name:"Dinesh",
        grad:"B.E",
        dept: "Computer",
        mobile:"897654321",
        email:"dinesh@gmail.com"

    },
])
  return (
    <Router>
      <StudentContext.Provider value={{data,setData}}>
      <div style={{display:'grid', gridTemplateColumns:"17% 83%"}}>
      <div><SideBar/></div>
    <div>
    <Routes>
        <Route path='/dashboard' element={<Dashboard value={data1}/>}/> 
        <Route path='/all-student' element={<AllStudent/>}/>
        <Route path='/add-student' element={<AddStudent/>}/>
        <Route path='/edit-student/:id' element={<EditStudent/>}/>
        <Route path='/sample' element={<Sample/>}/> 
        <Route path='/' element={<Dashboard value={data1}/>}/> 
    </Routes>
    </div>
      </div>
      </StudentContext.Provider>
    </Router>
  );
}

export default App;
