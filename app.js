const exporess = require('express')

const app = express();


app.get("/", (req,res)=>{
  res.send("CI CD Docker works");
})



