const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./api/users/user.router");
const clientRouter = require("./api/clients/cl.router");
const pannRouter = require("./api/panneau/pann.router");
const bgRouter = require("./api/boisrouge/bg.router");
const bdRouter = require("./api/boisdur/bd.router");
const bonRouter = require("./api/bon/bon.router");

const appartementRouter = require("./api/appartement/appar.router");

app.use(cors("*"));

const port = process.env.PORT || 5000;
app.use("/api/users", userRouter);
app.use("/api/clients", clientRouter);
app.use("/api/panneaux", pannRouter);
app.use("/api/boisrouges", bgRouter);
app.use("/api/boisdurs", bdRouter);
app.use("/api/bons", bonRouter);

app.use("/api/appartements", appartementRouter);

app.listen(port, () => {
  console.log("server is running ...");
});
