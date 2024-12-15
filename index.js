import express from "express";
import { server_port } from "./secret.js";
const app = express();
const port = server_port;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening on port http://localhost:${port}`
  );
});
