// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables to be reserved; max length is 5
const tables = [];
// Waitlist if tables are full
const waitlist = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
// Sends user to tables page
app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});
// Sends user to reserve page
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all tables
app.get("/api/tables", function (req, res) {
  res.json(tables);
});

app.get("/api/waitlist", (req, res) => res.json(waitlist));

// takes in JSON input
app.post("/api/tables", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware

  if (tables.length < 5) {
    tables.push(req.body);
    res.json(true);
  } else {
    waitlist.push(req.body);
    res.json(false);
  }
});

app.post("/api/clear", function(req, res) {
  // Empty out the arrays of data
  tables.length = 0;
  waitlist.length = 0;

  res.json({ ok: true });
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
