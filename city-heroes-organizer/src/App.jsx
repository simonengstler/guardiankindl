import React, { useState } from 'react';

const MyComponent = () => {
  const [titel, setTitel] = useState('');
  const [distance, setDistance] = useState('');
  const [street, setStreet] = useState('');
  const [timeslot, setTimeslot] = useState('');
  const [helpersRegistered, setHelpersRegistered] = useState('');
  const [description, setDescription] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleTitelChange = (e) => {
    setTitel(e.target.value);
  };

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleTimeslotChange = (e) => {
    setTimeslot(e.target.value);
  };

  const handleHelpersRegisteredChange = (e) => {
    setHelpersRegistered(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titel: titel,
          distance: distance,
          street: street,
          timeslot: timeslot,
          helpersRegistered: helpersRegistered,
          description: description,
          accepted: false,
        }),
      });

      setResponseMessage('Event sent successfully.');
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred while processing your request.');
    }
  };  

  return (
    <div className="flex flex-col items-center mt-4 max-w-xs">
      <label className="mb-2">
        Titel:
        <input type="text" value={titel} onChange={handleTitelChange} className="border p-2 mb-2" />
      </label>
      <label className="mb-2">
        Distance:
        <input type="text" value={distance} onChange={handleDistanceChange} className="border p-2 mb-2" />
      </label>
      <label className="mb-2">
        Street:
        <input type="text" value={street} onChange={handleStreetChange} className="border p-2 mb-2" />
      </label>
      <label className="mb-2">
        Timeslot:
        <input type="text" value={timeslot} onChange={handleTimeslotChange} className="border p-2 mb-2" />
      </label>
      <label className="mb-2">
        Helpers Registered:
        <input type="text" value={helpersRegistered} onChange={handleHelpersRegisteredChange} className="border p-2 mb-2" />
      </label>
      <label className="mb-2">
        Description:
        <textarea value={description} onChange={handleDescriptionChange} className="border p-2 mb-2" />
      </label>
      <button onClick={handleButtonClick} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        Send POST Request
      </button>
      {responseMessage && <p className="mt-2 text-green-600">{responseMessage}</p>}
    </div>
  );
};

export default MyComponent;
