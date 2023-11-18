import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { getAllEvents } from '../assets/store';
import React, { useState, useEffect } from 'react';


const MoreDetails = () => {
    //const { title, location, timeSlot, additionalInfo } = eventDetails;
    const location = useLocation();
    const customString = location.state?.customString || 0; // Use a default value if not provided
    const ourEvents = getAllEvents()
    const [events, setEvents] = useState(getAllEvents());

    const refreshEvents = () => {
        // Call your synchronous function to get updated events
        const updatedEvents = getAllEvents();
        setEvents(updatedEvents);
    };

    useEffect(() => {
        // Fetch events when the component mounts
        refreshEvents();

        // Set up an interval to fetch events periodically (every 5 seconds in this example)
        const intervalId = setInterval(() => {
            refreshEvents();
        }, 5000); // Adjust the interval as needed (in milliseconds)

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // The empty dependency array ensures that the effect runs only once on mount


    return (
        <div>
            <h2>Event-Details</h2>
                <div className="event-tile">
                    <div>
                        <h3>Placeholder: Map</h3>
                    </div>
                    <h3>Title: {ourEvents[customString]['title']}</h3>
                    <ul>
                        <li>Location: {ourEvents[customString]['street']}</li>
                        <li>Helpers: {ourEvents[customString]['helpersRegistered']}</li>
                        <li>Description: {ourEvents[customString]['description']}</li>
                    </ul>
                    {ourEvents[customString]['accepted'] ? (
                        <button onClick={() => ourEvents[customString]['accepted'] = false}>Cancel</button>
                    ) : (
                        <>
                            <button onClick={() => value.accepted=true}>Accept</button>
                            <button onClick={() => value.accepted=false}>Decline</button>
                        </>
                    )}
                </div>
        </div>
    );
};

export default MoreDetails;