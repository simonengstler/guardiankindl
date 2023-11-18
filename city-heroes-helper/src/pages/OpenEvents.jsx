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
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h2 className="text-3xl font-semibold mb-8">Open Events</h2>
          {Object.values(events).map((value, index) => (
            <div key={index} className="event-tile my-4 p-6 border border-gray-200 rounded-lg text-center bg-white">
              <h3 className="text-xl font-semibold mb-4">{value.titel}</h3>
              <p className="text-md text-gray-700">Distance: {value.distance}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                  <Link to='/more-details'>More details</Link>
                </button>
                <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300" onClick={() => value.accepted = true}>
                  Accept
                </button>
                <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300" onClick={() => console.log('Decline clicked')}>
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      );
}

export default OpenEvents;
