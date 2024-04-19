const WebSocket = require("ws");

const numberOfClients = 2000;
let totalElapseTime = 0;
let connectedClients = 0;

const clients = [];

function createClient(id) {
  const socket = new WebSocket("ws://10.0.4.11:8080/ws");

  socket.addEventListener("open", function (event) {
    console.log(`Client ${id} connected to WebSocket server`);

    // sendData(socket, id);
    connectedClients++;
  });

  socket.addEventListener("message", function (event) {
    const startTime = Date.now();
    const endTime = JSON.parse(event.data).timestamp;
    const elapsedTime = startTime - endTime;
    totalElapseTime += elapsedTime;

    if (connectedClients == numberOfClients) {
      console.log(
        `Time taken to send message to all clients: ${elapsedTime} ms`
      );
      console.log(
        `Time taken to send message to each clients: ${
          totalElapseTime / numberOfClients
        } ms`
      );
    }
  });

  clients.push(socket);
}

function sendData(socket, id) {
  const data = {
    data: "mxvvietha",
    timestamp: Date.now(),
  };
  socket.send(JSON.stringify(data));
  console.log(`Client ${id} sent:`, data);
}

for (let i = 0; i < numberOfClients; i++) {
  createClient(i);
}
