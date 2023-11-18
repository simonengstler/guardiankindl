import React, { useState } from 'react';
import MoreDetails from './MoreDetails';

const OpenEvents = () => {
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        { title: 'Event 1', distance: '5 km', location: 'Location 1', timeSlot: '10:00 AM', additionalInfo: 'Sample info for Event 1' },
        { title: 'Event 2', distance: '10 km', location: 'Location 2', timeSlot: '2:00 PM', additionalInfo: 'Sample info for Event 2' },
        { title: 'Event 3', distance: '8 km', location: 'Location 3', timeSlot: '5:00 PM', additionalInfo: 'Sample info for Event 3' },
    ];

    const handleMoreDetailsClick = (event) => {
        setSelectedEvent(event);
        setShowMoreDetails(true);
    };

    const handleCloseDetails = () => {
        setShowMoreDetails(false);
        setSelectedEvent(null);
    };

    return (
        <div>
            <h2>Open Events</h2>
            {events.map((event, index) => (
                <div key={index} className="event-tile">
                    <h3>{event.title}</h3>
                    <p>Distance: {event.distance}</p>
                    <button onClick={() => handleMoreDetailsClick(event)}>More details</button>
                    <button onClick={() => console.log('Accept clicked')}>Accept</button>
                    <button onClick={() => console.log('Decline clicked')}>Decline</button>
                </div>
            ))}
        </div>
    );
};

export default OpenEvents;