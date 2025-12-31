import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Docker Works!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
