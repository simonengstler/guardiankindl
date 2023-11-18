import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../assets/store';

import more from '../assets/more.png';
import cancel from '../assets/cancel.png';

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
            {Object.values(events).length > 0 ? (
                Object.values(events).map((value) => {
                    return value.accepted ? (
                        <div key={value.titel} className="event-tile">
                            <h2>{value.titel}</h2>
                            <p>Distance: {value.distance}</p>
                            <div className="buttons">
                                <button>
                                    <Link to='/more-details'><img src={more} alt="More" /></Link>
                                </button>
                                <button onClick={() => value.accepted = false}><img src={cancel} alt="Cancel" /></button>
                            </div>
                        </div>
                    ) : null;
                })
            ) : (
                <p className="text-xl text-center font-semibold mt-8">Lean back, everything is fine for now. Thank you for being a CITY HERO! 🤩</p>
            )}
        </div>
    );
};

export default AcceptedEvents;
