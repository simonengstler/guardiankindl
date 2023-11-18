import React from 'react';
import {Link} from "react-router-dom";

const MoreDetails = () => {
    //const { title, location, timeSlot, additionalInfo } = eventDetails;



    return (
        <div>
            <div>
            <button>
                <Link to='/open-events'>Return Main Page</Link>
            </button>
            </div>
            <div>
                {/* Placeholder for the map - You can integrate a map library here */}
                <p>Map Placeholder</p>
            </div>
            <h2>title placeholder</h2>
            <p>Location: placeholder</p>
            <p>Time Slot: placeholder</p>
            <p>Add. Info</p>
            <button onClick={() => console.log('Accept clicked')}>Accept</button>
            <button onClick={() => console.log('Decline clicked')}>Decline</button>
            <button onClick={() => console.log('Share clicked')}>Share</button>

        </div>
    );
};

export default MoreDetails;