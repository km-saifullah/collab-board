import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import boardRoutes from "./routes/board.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/boards", boardRoutes);

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    message: err.message || "Internal server error",
  });
});

export default app;
