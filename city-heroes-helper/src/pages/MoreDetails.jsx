import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { getAllEvents } from '../assets/store';
import React, { useState, useEffect } from 'react';

import accept from '../assets/accept.png';
import decline from '../assets/decline.png';
import cancel from '../assets/cancel.png';
import icon from '../assets/app-icon.png';



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
            <header>
                <img src={icon} alt="icon" style={{ height: '40px', width: '40px' }} />
                <h1>Event-Details</h1>
            </header>
            <div className="detail-tile">
                <h2>Isar flooding</h2>
                <br/>
                <b>At: {ourEvents[customString]['street']}</b>
                <b>Persons: {ourEvents[customString]['helpersRegistered']}</b>
                {ourEvents[customString]['description']}
                <br/>
                <br/>
                {ourEvents[customString]['accepted'] ? (
                    <button onClick={() => {ourEvents[customString]['accepted'] = false}}>
                        <Link to='/open-events'>
                            <img src={cancel} alt="Cancel"/>
                        </Link>
                    </button>
                ) : (
                    <>
                        <div className="buttons">
                            <button onClick={() => value.accepted = true}><img src={accept} alt="Accept" /></button>
                            <button onClick={() => value.accepted = false}><img src={decline} alt="Decline" /></button>
                        </div>
                    </>

                )}
            </div>
        </div>
    );
};

export default MoreDetails;