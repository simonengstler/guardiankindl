import React from 'react';

const MoreDetails = ({ eventDetails, onClose }) => {
    const { title, location, timeSlot, additionalInfo } = eventDetails;

    return (
        <div>
            <div>
                {/* Placeholder for the map - You can integrate a map library here */}
                <p>Map Placeholder</p>
            </div>
            <h2>{title}</h2>
            <p>Location: {location}</p>
            <p>Time Slot: {timeSlot}</p>
            <p>{additionalInfo}</p>
            <button onClick={() => console.log('Accept clicked')}>Accept</button>
            <button onClick={() => console.log('Decline clicked')}>Decline</button>
            <button onClick={() => console.log('Share clicked')}>Share</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default MoreDetails;