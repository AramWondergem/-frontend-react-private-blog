import React, {useState} from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Overview from "./Pages/Overview/Overview";
import Blogpost from "./Pages/Blogpost/Blogpost";
import NotFound from "./Pages/NotFound/NotFound";
import Nav from "./Components/Nav/Nav";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);


    return (
        <>
            <Nav isAuth={isAuthenticated} toggleIsAuth={toggleIsAuthenticated}/>
            <Routes>
                <>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login toggleIsAuth={toggleIsAuthenticated}/>}/>
                    <Route path="/overview" element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Overview/>
                        </PrivateRoute>}/>
                    <Route path="/blogposts/:id" element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Blogpost/>
                        </PrivateRoute>}/>
                    <Route path="*" element={<NotFound/>}/>
                </>
                }
            </Routes>
        </>
    );
}

export default App;

