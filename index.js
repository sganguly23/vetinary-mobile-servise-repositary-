const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const appointments = [];

app.post("/api/book", (req, res) => {
  const { petName, date } = req.body;
  appointments.push({ petName, date });
  console.log("New Appointment:", { petName, date });
  res.send({ success: true });
});

app.get("/api/appointments", (req, res) => {
  res.send(appointments);
});

app.listen(5000, () => console.log("Server running on port 5000"));