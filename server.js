const https = require('https');
const fs = require('fs');
const WebSocket = require('ws');

// Paths to your private key and certificate
const serverOptions = {
    key: fs.readFileSync('private-key.key'),  // Path to your private key
    cert: fs.readFileSync('certificate.crt') // Path to your certificate
};

// Create an HTTPS server
const server = https.createServer(serverOptions);

// Create a WebSocket server that uses the HTTPS server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    ws.send('Hello from WebSocket server!');
});

// Start the server on port 7070
server.listen(7070, () => {
    console.log('Server is listening on wss://localhost:7070');
});
