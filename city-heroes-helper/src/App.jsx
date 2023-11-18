// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OpenEvents from './pages/OpenEvents';
import MoreDetails from './pages/MoreDetails'; // Import the MoreDetails component
import Profile from './pages/Profile'; // Import the Profile component
import AcceptedEvents from './pages/accepted-events'; // Import the AcceptedEvents component

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="open-events" element={<OpenEvents />} />
                    <Route path="more-details" element={<MoreDetails />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="accepted-events" element={<AcceptedEvents />} />
                    {/* TODO: Add default route or 404 page */}
                </Routes>
                <footer className="ios-footer">
                    <Link to="/accepted-events">Accepted Events</Link>
                    <Link to="/open-events">Open Events</Link>
                    <Link to="/profile">Profile</Link>
                </footer>
            </div>
        </Router>
    );
};

export default App;
