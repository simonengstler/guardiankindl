// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OpenEvents from './pages/OpenEvents';
import MoreDetails from './pages/MoreDetails'; // Import the MoreDetails component
import Profile from './pages/Profile'; // Import the Profile component
import AcceptedEvents from './pages/AcceptedEvents'; // Import the AcceptedEvents component
import { addEvent } from './assets/store';

const App = () => {
    const [receivedEvent, setReceivedEvent] = useState(null);
   
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:3001');
    
        ws.onopen = () => {
          console.log('WebSocket connected');
        };
    
        ws.onmessage = (event) => {
          const parsedEvent = JSON.parse(event.data);
          setReceivedEvent(parsedEvent);
          addEvent(parsedEvent); // Add the received event to the events map
        };
    
        ws.onclose = () => {
          console.log('WebSocket disconnected');
        };
    
        // Clean up the WebSocket connection when the component unmounts
        return () => {
          ws.close();
        };
      }, []);

    console.log('receivedEvent', receivedEvent)

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<OpenEvents />} />
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
