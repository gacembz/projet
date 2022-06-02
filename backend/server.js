const express = require("express");
const connectDb = require("./config/connectDb");
const prodactRoutes = require("./routes/prodectRoutes");
const Router = require("./routes/userRoute");

const app = express()

app.use(express.json())


const port = 5001;
connectDb()


app.use("/api/user", Router)
app.use("/api/prodact",prodactRoutes )


app.listen(port,console.log(` app is running on port ${port}`) )