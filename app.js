import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Docker Works!");
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
