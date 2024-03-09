import express, { Application } from "express";

const port: number = 3000;
const app: Application = express();
app.listen(port, () => console.log("Listening on port ", port));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.get("/", (req, res) => res.status(200).json({ message: "Hello World" }));
