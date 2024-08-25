const express = require("express");

const app = express();

app.get("/getTime", (req, res) => {
  res.status(200).json({
    time: new Date().toLocaleString(),
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
