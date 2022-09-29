const express = require("express");

const app = express();

//middleware function to convert frontend data to json
app.use(express.json());
app.listen(3000);

let users = [
  { id: 1, name: "superman" },
  { id: 2, name: "ironman" },
  { id: 3, name: "billumon" },
];

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send(users);
});

app.post("/user", (req, res) => {
  console.log(req.body);

  //getting the body name and body age for {"name":"ironman","age":25}
  //   users = req.body.name + " " + req.body.age;

  users = req.body;
  res.json({
    message: "data recived sucessfully",
    user: req.body,
  });
});

//patch is to update data

app.patch("/user", (req, res) => {
  console.log("req body -> ", req.body);
  let dataToBeUpdated = req.body;
  for (key in dataToBeUpdated) {
    //for in loop to grab key values and iterate over the objects in users={}
    users[key] = dataToBeUpdated[key];
  }
  res.json({
    message: "data updated sucessfully",
  });
});

//to delete data

app.delete("/user", (req, res) => {
  users = {};
  res.json({
    message: "data has been deleted sucessfully",
  });
});

//params

app.get("/user/:username", (req, res) => {
  console.log(req.params.username);
  console.log(req.params);
  res.send("user id is recived");
});

