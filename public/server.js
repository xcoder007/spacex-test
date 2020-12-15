/* eslint-disable prettier/prettier */
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});
