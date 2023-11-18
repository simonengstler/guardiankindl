import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../assets/store';

import accept from '../assets/accept.png';
import decline from '../assets/decline.png';

const AcceptedEvents = () => {
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
            <h2>Accepted Events</h2>
            {Object.values(events).map((value) => {
                return value.accepted ? (
                    <div key={value.titel} className="event-tile">
                        <h3>{value.titel}</h3>
                        <p>Distance: {value.distance}</p>
                        <button>
                            <Link to='/more-details'>More details</Link>
                        </button>
                        <button onClick={() => value.accepted=false}><img src={decline} alt="Cancel" /></button>
                    </div>
                ) : null;
            })}
        </div>
    );
};

export default AcceptedEvents;
