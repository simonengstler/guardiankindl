import React, { useState } from 'react';

const MyComponent = () => {
  const [ort, setOrt] = useState('');
  const [titel, setTitel] = useState('');
  const [uhrzeit, setUhrzeit] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleOrtChange = (e) => {
    setOrt(e.target.value);
  };

  const handleTitelChange = (e) => {
    setTitel(e.target.value);
  };

  const handleUhrzeitChange = (e) => {
    setUhrzeit(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ort: ort,
          titel: titel,
          uhrzeit: uhrzeit,
        }),
      });

      const data = await response.json();
      setResponseMessage(data.message); // assuming the API returns a message
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred while processing your request.');
    }
  };  

  return (
    <div className="flex flex-col items-center mt-4 max-w-xs">
      <label className="mb-2">
        Ort:
        <input type="text" value={ort} onChange={handleOrtChange} className="border p-2 mb-2" />
      </label>
      <label className="mb-2">
        Titel:
        <input type="text" value={titel} onChange={handleTitelChange} className="border p-2 mb-2" />
      </label>
      <label className="mb-2">
        Uhrzeit:
        <input type="text" value={uhrzeit} onChange={handleUhrzeitChange} className="border p-2 mb-2" />
      </label>
      <button onClick={handleButtonClick} className="bg-blue-500 text-white p-2 rounded">
        Send POST Request
      </button>
      {responseMessage && <p className="mt-2">Response: {responseMessage}</p>}
    </div>
  );
};

export default MyComponent;