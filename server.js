import http from "http";
import { Server } from "socket.io";
import app from "./src/app.js";
import { connectDb } from "./src/config/db.js";
import boardSocket from "./src/sockets/board.socket.js";
import { clientUrl, port } from "./src/config/index.js";

connectDb();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: clientUrl,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

boardSocket(io);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
