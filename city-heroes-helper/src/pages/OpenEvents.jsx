import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../assets/store';

const OpenEvents = () => {
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
            <h2>Open Events</h2>
            {Object.entries(events).map(([key, value]) => (
                <div key={key} className="event-tile">
                    <h3>{value.titel}</h3>
                    <p>Distance: {value.distance}</p>
                    <button>
                        <Link
                            to="/more-details"
                            state={{ customString: key }}
                        >
                            More details
                        </Link>
                    </button>
                    {value.accepted ? (
                        <button onClick={() => console.log('Cancel clicked')}>Cancel</button>
                    ) : (
                        <>
                            <button onClick={() => value.accepted=true}>Accept</button>
                            <button onClick={() => value.accepted=false}>Decline</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default OpenEvents;
