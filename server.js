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

const tables = [
    {
      routeName: 1,
      id: "",
      name: "",
      email: "",
      phone: ""
    },
    {
        routeName: 2,
        id: "",
        name: "",
        email: "",
        phone: ""
      },
      {
        routeName: 3,
        id: "",
        name: "Jedi Master",
        email: "",
        phone: ""
      },
      {
        routeName: 4,
        id: "",
        name: "Jedi Master",
        email: "",
        phone: ""
      },
      {
        routeName: 5,
        id: "",
        name: "Jedi Master",
        email: "",
        phone: ""
      },
]

const waitlist = []

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
// Sends user to tables page
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });
// Sends user to reserve page
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
 // Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

app.get("/api/waitlist"), function(req, res) {
    return res.json(waitlist)
}
  
  
  // takes in JSON input
  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    let table = req.body;
  
    
    
  
    console.log(table);
  

  
    res.json(table);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  