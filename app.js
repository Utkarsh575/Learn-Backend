//mounting data to express using express Router

const express = require("express");

const app = express();

app.use(express.json());
app.listen(3000);

const userRouter = express.Router();
const authRouter = express.Router();

app.use("/user", userRouter);
app.use("/auth", authRouter);

userRouter
  .route("/")
  .get(getUser)  //path specific middlewares
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);
 
userRouter.route("/:id").get(getUserById);

authRouter
  .route("/signup")
  .get(middleware1, getSignUp, middleware2)
  .post(postSignUp);

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

function updateUser(req, res) {
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

function middleware1(req, res, next) {
  console.log("middleware 1 encountered");
  next();
}
function middleware2(req, res) {
  console.log("middleware 2 is encountered");
  console.log("middleware 2 ended the req/res cycle");
  res.sendFile("/public/index.html", { root: __dirname });
}

function getSignUp(req, res, next) {
  console.log("get signUp is called");
  next();
}

function postSignUp(req, res) {
  let obj = req.body;
  console.log("backend", obj);
  res.json({
    message: "user signed up",
    data: obj,
  });
}
