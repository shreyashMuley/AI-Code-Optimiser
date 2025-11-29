const express = require("express");//importing the express
require("dotenv").config();
const cors = require("cors");//cors 
const aiRoutes = require("./src/routes/ai.routes"); 

const app = express();// express is being stored in other variable 
const PORT = 3002;
app.use(cors()); //cors= cross origin resr=ource sharing 

app.use(express.json());

app.use('/ai', aiRoutes); 

app.listen(PORT, () => {
  console.log("server started");
});
