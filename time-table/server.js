const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const subject = require("./routes/api/subject");
const teachersName = require("./routes/api/teachersName");
const classAndsec = require("./routes/api/classAndsec");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/subject", subject);
app.use("/api/teachersName", teachersName);
app.use("/api/classAndsec", classAndsec);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
