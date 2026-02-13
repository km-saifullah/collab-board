const boardSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinBoard", (boardId) => {
      socket.join(boardId);
    });

    socket.on("taskUpdated", ({ boardId, tasks }) => {
      io.to(boardId).emit("boardUpdated", tasks);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

export default boardSocket;
