import React, { useState } from 'react';
import MoreDetails from './MoreDetails';

const OpenEvents = () => {
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <div>
            <div>
                {/* Placeholder for the map - You can integrate a map library here */}
                <p>Profile Placeholder</p>
            </div>
            <h2>Category-1</h2>
            <h2>Category-2</h2>
        </div>
    );
};

export default OpenEvents;