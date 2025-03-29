import "dotenv/config";
import express, { Express } from "express";

const app: Express = express();
const PORT = process.env.BACKEND_PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("API is running", req.body);
  res.json({ message: "API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
