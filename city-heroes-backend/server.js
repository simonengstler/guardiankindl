const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors'); // Import the 'cors' package

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON in the request body
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Store WebSocket connections for city-heroes-helper clients
const helperClients = new Set();

// WebSocket connection handling
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    // Handle messages received from city-heroes-organizer
    // Forwards these messages to city-heroes-helper clients
    helperClients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Register city-heroes-helper clients
  helperClients.add(ws);

  ws.on('close', () => {
    // Remove disconnected clients
    helperClients.delete(ws);
  });
});

// Handle POST requests from city-heroes-organizer
app.post('/events', (req, res) => {
    console.log("body", req.body)
  const eventData = req.body; // Assuming event data is sent in the request body
  // Broadcast the event data to connected city-heroes-helper clients
  wss.clients.forEach((client) => {
    if (client !== server && client.readyState === WebSocket.OPEN) {
        console.log(eventData)
        client.send(JSON.stringify(eventData));
    }
  });
  res.status(200).send('Event forwarded to city-heroes-helper');
});

// Start the server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
