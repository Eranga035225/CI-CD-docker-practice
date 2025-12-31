const exporess = require('express')

const app = express();


app.get("/", (req,res)=>{
  res.send("CI CD Docker works");
})

const PORT = 3004


app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})



