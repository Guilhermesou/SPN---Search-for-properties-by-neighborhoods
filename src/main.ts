import express from "express";
import routes from "./routes"

const app = express();

app.use(express.json());
app.use(routes)


app.listen(4000, () =>
  console.log("REST API server ready at: http://localhost:4000")
);