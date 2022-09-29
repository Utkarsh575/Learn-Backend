//mounting data to express using express Router

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

//mini app
const userRouter = express.Router();

//base router

app.use("/user", userRouter);

userRouter
  .route("/")
  .get(getUser)
  .post(postUser)
  .patch(updatehUser)
  .delete(deleteUser);

//mini app

userRouter.route("/:id").get(getUserById);

//params

app.get("/user/:username", (req, res) => {
  console.log(req.params.username);
  console.log(req.params);
  res.send("user id is recived");
});

function getUser(req, res) {
  res.send(users);
}

function postUser(req, res) {
  users = req.body;
  res.json({
    message: "data recived sucessfully",
    user: req.body,
  });
}

function updatehUser(req, res) {
  let dataToBeUpdated = req.body;
  for (key in dataToBeUpdated) {
    users[key] = dataToBeUpdated[key];
  }
  res.json({
    message: "data updated sucessfully",
  });
}

function deleteUser(req, res) {
  users = {};
  res.json({
    message: "data has been deleted sucessfully",
  });
}

function getUserById(req, res) {
  console.log(req.params.id);
  let paramId = req.params.id;
  let obj = {};
  for (let i = 0; i < users.length; i++) {
    if (users[i]["id"] == paramId) {
      obj = users[i];
    }
  }
  res.json({
    message: "req recived ",
    data: obj,
  });
}

function getUserData(req, res) {}
