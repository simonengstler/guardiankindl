import React, { useState } from 'react';
import MoreDetails from './MoreDetails';
import {Link, Route} from "react-router-dom";
const OpenEvents = () => {

    const events = [
        { title: 'Event 1', distance: '5 km', location: 'Location 1', timeSlot: '10:00 AM', additionalInfo: 'Sample info for Event 1' },
        { title: 'Event 2', distance: '10 km', location: 'Location 2', timeSlot: '2:00 PM', additionalInfo: 'Sample info for Event 2' },
        { title: 'Event 3', distance: '8 km', location: 'Location 3', timeSlot: '5:00 PM', additionalInfo: 'Sample info for Event 3' },
    ];

    const pageName = '/open-events';

    return (
        <div>
            <h2>Open Events</h2>
            {events.map((event, index) => (
                <div key={index} className="event-tile">
                    <h3>{event.title}</h3>
                    <p>Distance: {event.distance}</p>
                    <button>
                        <Link to='/more-details'>More details</Link>
                    </button>
                    <button onClick={() => console.log('Accept clicked')}>Accept</button>
                    <button onClick={() => console.log('Decline clicked')}>Decline</button>
                </div>
            ))}
        </div>
    );
};

export default OpenEvents;