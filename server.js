const express = require("express");
const path = require("path");

const app = express();
const public_path = path.join(__dirname, "..", "build");
app.use(express.static(public_path));
const port = process.env.PORT || 3000;

app.get("*", (req, res) => {
  res.sendFile(path.join(public_path, "index.html"));
});

app.listen(port, () => {
  console.log(`server is listening on port${port}`);
});
