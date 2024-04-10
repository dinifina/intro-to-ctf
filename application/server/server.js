const express=require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

//routes

app.use("/users", require("./routes/auth"));

app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
})