import React, { useState, useEffect } from 'react';

const App = () => {
  const [receivedEvent, setReceivedEvent] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3001');

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const parsedEvent = JSON.parse(event.data);
      setReceivedEvent(parsedEvent);
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your City Heroes App</h1>
      </header>
      {/* Display the received event */}
      {receivedEvent && (
        <div>
          <h2>Received Event</h2>
          <pre>{JSON.stringify(receivedEvent, null, 2)}</pre>
        </div>
      )}
      {/* Your application content */}
      {/* For example: */}
      <main>
        <p>This is where your app content goes.</p>
      </main>
    </div>
  );
};

export default App;
