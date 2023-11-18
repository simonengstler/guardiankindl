import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getAllEvents} from '../assets/store';

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
            {Object.entries(events).length > 0 ? (
                Object.entries(events).map(([key, value]) => (
                    <div key={key} className="event-tile my-4 p-6 border border-gray-200 rounded-lg text-center bg-white">
                        <h3 className="text-xl font-semibold mb-4">{value.titel}</h3>
                        <p className="text-md text-gray-700">Distance: {value.distance}</p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                                <Link to="/more-details" state={{ customString: key }}>
                                    More details
                                </Link>
                            </button>
                            {value.accepted ? (
                                <button onClick={() => value.accepted = false}>Cancel</button>
                            ) : (
                                <>
                                    <button
                                        className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300"
                                        onClick={() => value.accepted = true}>
                                        Accept
                                    </button>
                                    <button
                                        className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300"
                                        onClick={() => value.accepted = false}>
                                        Decline
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-xl text-center font-semibold mt-8">Lean back, everything is fine for now. Thank you for being a CITY HERO! 🤩</p>
            )}
        </div>
    );
};

export default OpenEvents;
