import express = require("express"); // EsModule y commonJS
import diaryRouter from "./routes/diaries";
const app: express.Application = express();
app.use(express.json()); // middleware que transforma la req.body a un json

const PORT = 3000;

app.get("/ping", function (_req, res) {
  console.log("Someone pinged here!!");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
